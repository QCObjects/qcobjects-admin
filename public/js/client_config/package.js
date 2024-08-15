"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_client_config_1 = __importDefault(require("../packages/com.qcobjects.admin.api.client_config"));
(0, qcobjects_1.Package)("qcobjects-admin/client_config", (0, qcobjects_1.Package)("qcobjects-admin/public/js/client_config/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.client_config", [
    com_qcobjects_admin_api_client_config_1.default
])));
exports.default = com_qcobjects_admin_api_client_config_1.default;
