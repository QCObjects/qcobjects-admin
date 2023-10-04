"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_record_manager_1 = require("../../record_manager/com.qcobjects.data.record_manager");
class UserManager extends com_qcobjects_data_record_manager_1.RecordManager {
}
exports.UserManager = UserManager;
(0, qcobjects_1.Package)("com.qcobjects.admin.model.manager.user", [
    UserManager
]);
