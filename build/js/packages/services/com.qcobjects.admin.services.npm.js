"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NPMQCObjectsLibsService = exports.NPMQCObjectsPluginsService = exports.NPMQCObjectsHandlersService = void 0;
const qcobjects_1 = require("qcobjects");
class NPMService extends qcobjects_1.Service {
    constructor() {
        super(...arguments);
        this.name = "npm-service";
        this.external = true;
        this.cached = false;
        this.method = "GET";
        this.headers = {};
        this.withCredentials = false;
    }
    done({ service }) {
        qcobjects_1.logger.debug(service.template);
        const result = JSON.parse(service.template)
            .objects.map((project) => {
            return {
                package: project.package,
                flags: project.flags,
                score: project.score,
                searchScore: project.searchScore
            };
        });
        service.template = JSON.stringify({
            result
        });
    }
}
class NPMQCObjectsPluginsService extends NPMService {
    constructor() {
        super(...arguments);
        this.name = "npm-plugins-service";
        this.url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-command&size=250";
    }
}
exports.NPMQCObjectsPluginsService = NPMQCObjectsPluginsService;
class NPMQCObjectsHandlersService extends NPMService {
    constructor() {
        super(...arguments);
        this.name = "npm-handlers-service";
        this.url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-handler&size=250";
    }
}
exports.NPMQCObjectsHandlersService = NPMQCObjectsHandlersService;
class NPMQCObjectsLibsService extends NPMService {
    constructor() {
        super(...arguments);
        this.name = "npm-libs-service";
        this.url = "https://registry.npmjs.org/-/v1/search?text=keywords:qcobjects-lib&size=250";
    }
}
exports.NPMQCObjectsLibsService = NPMQCObjectsLibsService;
