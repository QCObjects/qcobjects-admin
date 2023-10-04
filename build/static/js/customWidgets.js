"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
(0, qcobjects_1.RegisterWidgets)("layout-basic", "splash-screen", "github-grid", "octocat-icon", "lib-list");
(0, qcobjects_1.RegisterWidgets)("gitpod-button", "netlify-button", "aws-button", "github-button", "codespaces-button", "deploy-grid");
(0, qcobjects_1.RegisterWidget)("version-string");
const userProfile = (component, field) => {
    const user = qcobjects_1.global.get("user", {});
    const value = field.split(".").reduce((a, b) => { return a[b]; }, user);
    return value;
};
(new qcobjects_1.Processor()).setProcessor(userProfile);
