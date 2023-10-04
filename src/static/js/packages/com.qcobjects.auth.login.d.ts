import "@pwabuilder/pwaauth";
import { Component, ComponentParams, ComponentDoneResponse, Service } from "qcobjects";
import { Modal, ModalParams, SignalComponent } from "./com.qcobjects.modal.components";
declare class LoginComponent extends SignalComponent {
    tplsource: string;
    template: string;
    constructor(component: ComponentParams);
    authConfig(_component: Component, configValue: string): string;
    signInCompleted(ev: any): void;
    done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
}
declare class LoginModal extends Modal {
    constructor(component: ModalParams);
}
declare class AuthComponent extends Component {
    authenticated: boolean;
    loginModal: LoginModal;
    accessToken: string;
    lockedInnerHTML: string;
    authServiceInstance: Service;
    authBuild(): Promise<{
        request: XMLHttpRequest;
        component: Component;
    }>;
    rebuild(): Promise<{
        request: XMLHttpRequest;
        component: Component;
    }>;
    reset(): void;
    login(): Promise<void>;
    attachLoginModal(): void;
    getAccessToken(): Promise<string>;
    auth(): Promise<{
        component: AuthComponent;
    }>;
}
export { LoginComponent, LoginModal, AuthComponent };
