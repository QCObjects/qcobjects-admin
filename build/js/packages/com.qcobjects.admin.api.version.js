"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class VersionHandler extends qcobjects_1.BackendMicroservice {
    constructor(microservice) {
        microservice.body = (0, qcobjects_1._DataStringify)(global.__get_version__());
        super(microservice);
    }
}
exports.default = VersionHandler;
