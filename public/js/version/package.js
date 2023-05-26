"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_version_1 = __importDefault(require("../packages/com.qcobjects.admin.api.version"));
(0, qcobjects_1.Package)("qcobjects-admin/full-version", (0, qcobjects_1.Package)("qcobjects-admin/public/js/version/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.version", [
    com_qcobjects_admin_api_version_1.default
])));
