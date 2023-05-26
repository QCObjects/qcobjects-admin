"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_installPlugin_1 = __importDefault(require("../../packages/com.qcobjects.admin.api.installPlugin"));
(0, qcobjects_1.Package)("qcobjects-admin/plugins/i", (0, qcobjects_1.Package)("qcobjects-admin/public/js/plugins/i/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.plugins", [
    com_qcobjects_admin_api_installPlugin_1.default
])));
