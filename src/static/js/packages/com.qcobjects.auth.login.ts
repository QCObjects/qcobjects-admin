import "@pwabuilder/pwaauth";
import { Component, ComponentParams, CONFIG, ComponentDoneResponse, Service, logger, Package, _DOMCreateElement, QCObjectsShadowedElement, global } from "qcobjects";
import { Modal, ModalParams, SignalComponent } from "./com.qcobjects.modal.components";

interface AuthData {
    userAccessToken:string;
    authenticated:boolean;
    user: {
        name:string;
        email:string;
    }
}

class LoginComponent extends SignalComponent {
    tplsource = "inline";
    template = `
    <style>
    .auth_providers_container {
        margin: 0 auto;
        border-radius: 20px;
        display: inline-flex;
        min-height: 244px;
        min-width: 380px;
        box-shadow: rgba(228, 228, 234, 0.22) 0 22px 25px 0, rgba(228, 228, 234, 0.5) 0 9px 23px 0;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: baseline;
        flex-direction: column;
    }
    .auth_providers_container:hover {
        box-shadow: rgba(228, 228, 234, 0.56) 0 22px 32px 0, rgba(228, 228, 234, 0.64) 0 9px 28px 0;
    }
    button.microsoft-btn, button.google-btn {
        border:none;
        display: block;
        width: 100%;
        padding: 19px;
        cursor: pointer;
        border-radius: 27px;
        border-width: 0px;
        text-align: left;
        color: rgb(255, 255, 255);
        background-color: rgb(84 84 84 / 22%);
        margin: 0 auto;
        margin-bottom: 20px;
        max-width: 200px;
        box-shadow: rgba(228, 228, 234, 0.22) 0 22px 25px 0, rgba(228, 228, 234, 0.5) 0 9px 23px 0;
    }
    button.microsoft-btn:hover, 
    button.google-btn:hover {
        box-shadow: rgba(228, 228, 234, 0.56) 0 22px 32px 0, rgba(228, 228, 234, 0.64) 0 9px 28px 0;
    }
    h2.title {
        color:white;
        padding-left:13px;
    }
    hr.divider {
        border: 1px solid #a2a2a5;
        width: 98%;
        box-shadow: inset rgba(228, 228, 234, 0.22) -3px -4px 0px 12px, rgb(124 124 137 / 50%) 0 9px 23px 0;
        margin-bottom: 27px;
    }
    </style>
    <div>
        <img src="assets/img/logo-qcobjects-white.svg" width="300px"/>
    </div>
    <div class="auth_providers_container">
    <h2 class="title">Sign In</h2>
    <hr class="divider"/>
        <button class="microsoft-btn" part="microsoftButton"><img width="20px" height="20px" part="microsoftIcon" loading="lazy" src="assets/img/auth-icons/login-microsoft-icon.svg">&nbsp;Sign in with Microsoft</button>
        <button class="google-btn" part="googleButton"><img width="20px" height="20px" part="googleIcon" loading="lazy" src="assets/img/auth-icons/login-google-icon.svg">&nbsp;Sign in with Google</button>
    </div>
    `;

    constructor(component:ComponentParams){
        super(component);
        this.processorHandler.setProcessor(this.authConfig);
    }

    authConfig (_component:Component, configValue:string):string {
        const value = configValue.split(".").reduce((a, b)=>{return a[b];}, CONFIG.get("backend", {auth:{}}).auth);
        return value;
    }

    signInCompleted (ev:any) {
        const signIn = ev.detail;
        if (signIn.error) {
            console.error("Sign in failed", signIn.error);
        } else {
            console.log("Email: ", signIn.email);
            console.log("Name: ", signIn.name);
            console.log("Picture: ", signIn.imageUrl);
            console.log("Access token", signIn.accessToken);
            console.log("Access token expiration date", signIn.accessTokenExpiration);
            console.log("Provider (MS, Google, FB): ", signIn.provider);
            console.log("Raw data from provider: ", signIn.providerData);
            global.set("signIn", signIn);
            this.fireSignal("signInCompleted");
        }
    }

    done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse> {
        return new Promise ((resolve)=> {
            const pwaAuth = _DOMCreateElement("pwa-auth");
            pwaAuth.setAttribute("appearance", "none");
            pwaAuth.setAttribute("microsoftkey", this.authConfig(this, "microsoftapikey"));
            pwaAuth.setAttribute("googlekey", this.authConfig(this, "googleapikey"));
            pwaAuth.setAttribute("credentialmode", "none");
            document.body.appendChild(pwaAuth);

            const signInWithMicrosoftBtn = (this.shadowRoot as QCObjectsShadowedElement).subelements("button.microsoft-btn").pop() as HTMLButtonElement;
            const signInWithGoogleBtn = (this.shadowRoot as QCObjectsShadowedElement).subelements("button.google-btn").pop() as HTMLButtonElement;

            signInWithMicrosoftBtn.addEventListener("click", () => (pwaAuth as any).signIn("Microsoft"));
            signInWithGoogleBtn.addEventListener("click", () => (pwaAuth as any).signIn("Google"));

            if (pwaAuth){
                pwaAuth.addEventListener("signin-completed", this.signInCompleted.bind(this));
            } else {
                throw Error("[AuthComponent][Done] pwa-auth not loaded.");
            }
            resolve(super.done(standardResponse));
        });
    }
}

class LoginModal extends Modal {
    constructor(component:ModalParams){
        component.enclosureComponentClass = "LoginComponent";
        super(component);
    }
}

class AuthComponent extends Component {
    authenticated = false;
    loginModal!:LoginModal;
    accessToken!: string;
    lockedInnerHTML!:string;
    authServiceInstance!:Service;

    authBuild (): Promise<{ request: XMLHttpRequest; component: Component; }> {
        return new Promise ((resolve, reject)=>{
            (async ()=>{
                try {
                    await this.auth();
                    if (this.authenticated){
                        logger.debug("User has been authenticated");
                        resolve({request:new XMLHttpRequest(), component: this });
                    } else {
                        await this.login();
                        resolve({request:new XMLHttpRequest(), component: this });
                    }
                } catch (e){
                    reject(e);
                }
            })();
        });
    }

    rebuild(): Promise<{ request: XMLHttpRequest; component: Component; }> {

        return this.authBuild()
        .finally(()=>{
            return super.rebuild();
        });
    }

    reset(){
        this.body.innerHTML = "";
        if (typeof this.shadowRoot !== "undefined"){
            this.body.append(this.shadowRoot.host);        
        }
    }

    async login(){
        logger.debug("LOGIN");
        this.loginModal = new LoginModal({name:"login-modal", __parent__:this});
        this.loginModal.submodal.on("signInCompleted", ()=>{
            this.loginModal.close();
            this.authenticated = true;
            this.reset();
        });
        this.attachLoginModal();
    }

    attachLoginModal (){
        this.body.innerHTML = "";
        this.body.append(this.loginModal.body);
    }

    getAccessToken():Promise<string> {
        return new Promise((resolve)=>{
            this.authenticated = this.data.authenticated;
            resolve((this.data as AuthData).userAccessToken);
        });
    }

    auth ():Promise<{component: AuthComponent; }>{
        return new Promise ((resolve)=> {
            if (CONFIG.get("auth", {enabled:true}).enabled){
                logger.debug("LOGIN");
                this.getAccessToken()
                .then((accessToken)=>{
                    this.accessToken = accessToken;
                    resolve({component:this});
                });
            } else {
                this.authenticated = true;
                resolve({component:this});
            }
        });
    }
}

Package("com.qcobjects.auth.login", [
    LoginComponent,
    LoginModal,
    AuthComponent
]);

export {LoginComponent, LoginModal, AuthComponent};

