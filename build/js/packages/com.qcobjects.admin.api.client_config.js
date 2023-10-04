"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class ConfigHandler extends qcobjects_1.BackendMicroservice {
    constructor() {
        super(...arguments);
        this.responseHeaders = {
            "Content-Type": "application/json"
        };
    }
    done() {
        const authEnabled = qcobjects_1.CONFIG.get("backend", { auth: { enabled: "" } }).auth.enabled;
        const microsoftapikey = qcobjects_1.CONFIG.get("backend", { auth: { microsoftapikey: "" } }).auth.microsoftapikey || "";
        const defaultUser = qcobjects_1.CONFIG.get("backend", { auth: { defaultUser: "admin" } }).auth.defaultUser || "admin";
        const defaultPasswd = qcobjects_1.CONFIG.get("backend", { auth: { defaultPasswd: "admin123" } }).auth.defaultPasswd || "admin123";
        this.body = (0, qcobjects_1._DataStringify)({
            backend: {
                auth: {
                    enabled: authEnabled,
                    defaultUser,
                    defaultPasswd,
                    microsoftapikey
                },
            }
        });
        super.done();
    }
}
exports.default = ConfigHandler;
