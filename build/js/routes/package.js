"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_api_routes_1 = __importDefault(require("../packages/com.qcobjects.admin.api.routes"));
(0, qcobjects_1.Package)("qcobjects-admin/routes", (0, qcobjects_1.Package)("qcobjects-admin/public/js/routes/index.cjs", (0, qcobjects_1.Package)("com.qcobjects.admin.api.routes", [
    com_qcobjects_admin_api_routes_1.default
])));
