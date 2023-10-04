"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class AuthConnectService extends qcobjects_1.JSONService {
    constructor() {
        super();
        this.url = "/admin/api/auth/user";
        const userToken = "1234";
        this.headers = {
            "Content-Type": "application/json",
            "Authentication": `Bearer ${userToken}`
        };
        if (qcobjects_1.CONFIG.get("backend", { auth: { enabled: false } }).auth.enabled) {
            this.kind = "rest";
        }
        else {
            this.kind = "mockup";
        }
    }
    setAuthenticatedUser(user) {
        qcobjects_1.global.set("user", user);
    }
    mockup({ request, service }) {
        const user = {
            name: "John Doe",
            email: "a@b.com"
        };
        this.template = (0, qcobjects_1._DataStringify)({
            user,
            authenticated: true,
            userAccessToken: "1234"
        });
        this.setAuthenticatedUser(user);
        this.done({ request, service });
    }
    done({ service }) {
        const result = JSON.parse(service.template);
        const { user, authenticated, userAccessToken } = result;
        service.template = {
            user,
            authenticated,
            userAccessToken
        };
        this.setAuthenticatedUser(user);
    }
}
(0, qcobjects_1.Package)("com.qcobjects.admin.static.auth.services", [
    AuthConnectService
]);
