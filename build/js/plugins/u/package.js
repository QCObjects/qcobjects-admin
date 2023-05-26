"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_uninstallPlugin_1 = __importDefault(require("../../packages/com.qcobjects.admin.api.uninstallPlugin"));
(0, qcobjects_1.Package)("qcobjects-admin/plugins/u", (0, qcobjects_1.Package)("qcobjects-admin/public/js/plugins/u/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.plugins", [
    com_qcobjects_admin_api_uninstallPlugin_1.default
])));
