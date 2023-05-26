"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const cmdShell_1 = require("./tools/cmdShell");
class ApiHandler extends qcobjects_1.BackendMicroservice {
    post(formData) {
        const data = JSON.parse(formData.toString());
        const cmdData = {
            cmd: `npm install ${data.package}`
        };
        (0, cmdShell_1.execCmdShell)(cmdData).then((responseData) => {
            global.__reset_settings__();
            this.body = (0, qcobjects_1._DataStringify)({
                "status": "OK",
                "message": responseData
            });
            this.done();
        })
            .catch(e => {
            qcobjects_1.logger.warn(e);
            this.body = (0, qcobjects_1._DataStringify)({
                "status": "Error",
                "message": e.message
            });
            this.done();
        });
    }
}
exports.default = ApiHandler;
