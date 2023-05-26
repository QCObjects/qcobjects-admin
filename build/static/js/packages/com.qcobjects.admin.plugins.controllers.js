"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const external_components_1 = require("./external.components");
const qcobjects_sdk_1 = require("qcobjects-sdk");
class PluginsController extends external_components_1.XTermController {
    constructor(controller) {
        super(controller);
        const lines = [
            `npm ${controller.operation} ${this.component.data.package}`,
            `
Getting command response...`
        ];
        // eslint-disable-next-line array-callback-return
        lines.map((c, index) => {
            setTimeout(() => {
                (0, external_components_1.typewriter)(this.term, c);
                this.term.write("\r\n$ ");
            }, 1500 * (index + 1));
        });
        const returnUrl = `/admin/${this.component.data.packageType}`;
        const service = new qcobjects_1.Service();
        service.url = `/admin/api/plugins/${controller.serviceMethod}`;
        service.method = "POST";
        service.done = () => qcobjects_1.logger.debug(`Plugin ${this.component.data.package} was ${controller.operationSuccess}.`);
        service.data = { package: this.component.data.package };
        (0, qcobjects_1.serviceLoader)(service, false)
            .then(({ service }) => {
            const response = JSON.parse(service.template);
            const responseLines = response.message.split("\n");
            // eslint-disable-next-line array-callback-return
            responseLines.map((c, index) => {
                setTimeout(() => {
                    (0, external_components_1.typewriter)(this.term, `${c}`);
                    this.term.writeln("");
                }, 800 * (index + 1));
            });
            setTimeout(() => {
                if (response.status === "OK") {
                    qcobjects_sdk_1.NotificationComponent.success(`${this.component.data.package} was ${controller.operationSuccess}!`);
                    setTimeout(() => { location.href = `${returnUrl}`; }, 1000);
                }
                else {
                    qcobjects_sdk_1.NotificationComponent.danger(`It was not possible to ${controller.operation} ${this.component.data.package}.`);
                }
            }, 800 * (responseLines.length + 1));
        })
            .catch(e => {
            qcobjects_1.logger.warn(e.message);
            qcobjects_sdk_1.NotificationComponent.danger(`It was not possible to ${controller.operation} ${this.component.data.package}.`);
        });
    }
}
class UninstallPluginsController extends PluginsController {
    constructor(controller) {
        controller.operation = "uninstall";
        controller.operationSuccess = "uninstalled";
        controller.serviceMethod = "u";
        super(controller);
    }
}
class InstallPluginsController extends PluginsController {
    constructor(controller) {
        controller.operation = "install";
        controller.operationSuccess = "installed";
        controller.serviceMethod = "i";
        super(controller);
    }
}
(0, qcobjects_1.Package)("com.qcobjects.admin.plugins.controllers", [
    PluginsController,
    InstallPluginsController,
    UninstallPluginsController
]);
