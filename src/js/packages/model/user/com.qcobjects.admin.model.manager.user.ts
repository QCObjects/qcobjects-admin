import { Package } from "qcobjects";
import { RecordManager } from "../../record_manager/com.qcobjects.data.record_manager";
import { IDBRecordManager } from "../../record_manager/com.qcobjects.data.db.engines";

export class UserManager extends RecordManager implements IDBRecordManager {}

Package("com.qcobjects.admin.model.manager.user", [
    UserManager
]);
