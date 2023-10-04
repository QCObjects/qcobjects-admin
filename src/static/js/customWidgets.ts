import { Component, Processor, RegisterWidget, RegisterWidgets, global } from "qcobjects";

RegisterWidgets("layout-basic", "splash-screen", "github-grid", "octocat-icon", "lib-list");
RegisterWidgets("gitpod-button", "netlify-button", "aws-button", "github-button", "codespaces-button", "deploy-grid");
RegisterWidget("version-string");

const userProfile = (component:Component,field:string) => {
    const user = global.get("user", {}) as any;
    const value = field.split(".").reduce((a, b)=>{return a[b as keyof typeof user];}, user);
    return value;
};

(new Processor()).setProcessor(userProfile);