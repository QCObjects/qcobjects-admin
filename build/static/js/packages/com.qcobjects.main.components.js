"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainComponent = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_auth_login_1 = require("./com.qcobjects.auth.login");
class MainComponent extends com_qcobjects_auth_login_1.AuthComponent {
}
exports.MainComponent = MainComponent;
(0, qcobjects_1.Package)("com.qcobjects.main.components", [
    MainComponent
]);
