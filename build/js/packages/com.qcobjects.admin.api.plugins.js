"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_admin_services_npm_1 = require("./services/com.qcobjects.admin.services.npm");
const serviceLoaderNode_1 = __importDefault(require("./services/serviceLoaderNode"));
const packageInfo_1 = __importDefault(require("./tools/packageInfo"));
class PluginsHandler extends qcobjects_1.BackendMicroservice {
    done() {
        const installed = qcobjects_1.CONFIG.get("backend", { plugins: [] }).plugins;
        const npmAvailable = new com_qcobjects_admin_services_npm_1.NPMQCObjectsPluginsService();
        (0, serviceLoaderNode_1.default)(npmAvailable)
            .then(({ service }) => {
            const available = JSON.parse(service.template).result.map((r) => r.package.name);
            const nonInstalled = available.filter(p => !installed.includes(p));
            const responseBody = {
                available: available.map(p => (0, packageInfo_1.default)(p)),
                installed: installed.map(p => (0, packageInfo_1.default)(p)),
                nonInstalled: nonInstalled.map(p => (0, packageInfo_1.default)(p))
            };
            this.body = JSON.stringify(responseBody);
            super.done();
        });
    }
}
exports.default = PluginsHandler;
