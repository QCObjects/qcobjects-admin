"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_handlers_1 = __importDefault(require("../packages/com.qcobjects.admin.api.handlers"));
(0, qcobjects_1.Package)("qcobjects-admin/handlers", (0, qcobjects_1.Package)("qcobjects-admin/public/js/handlers/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.handlers", [
    com_qcobjects_admin_api_handlers_1.default
])));
