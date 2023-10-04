import { JSONService, Service, Package, CONFIG, _DataStringify, global } from "qcobjects";

interface User {
    name:string;
    email:string;
}

interface AuthData {
    userAccessToken:string;
    authenticated:boolean;
    user: User
}

class AuthConnectService extends JSONService {
    url = "/admin/api/auth/user";

    constructor(){
        super();
        const userToken = "1234";
        this.headers = {
            "Content-Type": "application/json",
            "Authentication": `Bearer ${userToken}`
        };

        if (CONFIG.get("backend", {auth:{enabled:false}}).auth.enabled){
            this.kind = "rest";
        } else {
            this.kind = "mockup";
        }
    }

    setAuthenticatedUser (user:User){
        global.set("user", user);
    }

    mockup ({request, service}:{ request:XMLHttpRequest, service:Service }){
        const user:User = {
            name:"John Doe",
            email:"a@b.com"
        };
        this.template = _DataStringify({
            user,
            authenticated:true,
            userAccessToken:"1234"
        } as AuthData);
        this.setAuthenticatedUser(user);
        this.done({request, service});
    }

    done ({service}:{ request:XMLHttpRequest, service:Service }){
        const result = JSON.parse(service.template);
        const {user, authenticated, userAccessToken} = result as AuthData;
        service.template = {
            user,
            authenticated,
            userAccessToken
        } as AuthData;
        this.setAuthenticatedUser(user);
    }
}

Package("com.qcobjects.admin.static.auth.services", [
    AuthConnectService
]);