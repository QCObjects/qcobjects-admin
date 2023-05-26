"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class AdminAvailableNpmService extends qcobjects_1.JSONService {
    done({ service }) {
        const result = JSON.parse(service.template);
        const { available, installed } = result;
        service.template = {
            result: available
                .map((m) => {
                return {
                    name: m.name,
                    description: m.description,
                    version: m.version,
                    "repository.url": m["repository.url"]
                };
            })
                .map((a) => {
                return Object.assign({
                    installed: (installed.filter((i) => i.name === a.name).length > 0)
                }, a);
            })
        };
    }
}
class AdminAvailablePluginsService extends AdminAvailableNpmService {
    constructor() {
        super(...arguments);
        this.url = "/admin/api/plugins";
    }
}
class AdminAvailableHandlersService extends AdminAvailableNpmService {
    constructor() {
        super(...arguments);
        this.url = "/admin/api/handlers";
    }
}
class AdminAvailableLibsService extends AdminAvailableNpmService {
    constructor() {
        super(...arguments);
        this.url = "/admin/api/libs";
    }
}
class VersionStringService extends qcobjects_1.JSONService {
    constructor() {
        super(...arguments);
        this.url = "/admin/api/version";
    }
}
(0, qcobjects_1.Package)("com.qcobjects.admin.static.services", [
    AdminAvailableNpmService,
    AdminAvailablePluginsService,
    AdminAvailableHandlersService,
    AdminAvailableLibsService,
    VersionStringService
]);
