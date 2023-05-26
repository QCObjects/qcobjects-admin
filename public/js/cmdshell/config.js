"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
/*
* The next values are the default settings
* You can change any value in runtime by using CONFIG.set
* or changing the static initial value in a config.json file
*/
qcobjects_1.CONFIG.set("hasAdmin", true);
const backend = qcobjects_1.CONFIG.get("backend", {});
if (typeof backend.routes === "undefined") {
    backend.routes = [];
}
backend.routes.push({
    name: "QCObjects Admin Panel CMD Shell!",
    description: "This endpoint allows you to execute a shell command",
    path: "^/admin/api/cmdshell$",
    microservice: "qcobjects-admin/cmdshell",
    headers: {
        "content-type": "text/html; charset=utf-8"
    },
    responseHeaders: {},
    cors: {
        "allow_origins": "*"
    }
});
qcobjects_1.CONFIG.set("backend", backend);
