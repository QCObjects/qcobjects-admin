"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class DisplayRoutes extends qcobjects_1.BackendMicroservice {
    constructor(microservice) {
        microservice.body = JSON.stringify(qcobjects_1.CONFIG.get("backend", {}).routes);
        super(microservice);
    }
}
exports.default = DisplayRoutes;
