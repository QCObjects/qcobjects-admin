"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const packageInfo = (pName) => {
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { execSync } = require("child_process");
    let data;
    try {
        data = execSync(`npm view ${pName} name description version repository.url --json`).toString();
    }
    catch (e) {
        data = (0, qcobjects_1._DataStringify)({
            name: pName,
            description: "",
            version: "0.0.0",
            "repository.url": ""
        });
    }
    return JSON.parse(data);
};
exports.default = packageInfo;
