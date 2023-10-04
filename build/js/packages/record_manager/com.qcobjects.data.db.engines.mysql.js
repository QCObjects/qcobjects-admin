"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLEngine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("./com.qcobjects.data.db.engines");
class MySQLEngine extends com_qcobjects_data_db_engines_1.DBEngine {
    constructor() {
        super(...arguments);
        this.__filter = [];
        this.name = "mysql";
        this.databaseName = "mysql";
    }
    getAllRecords() {
        throw new Error("Method not implemented.");
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    get() {
        throw new Error("Method not implemented.");
    }
    save() {
        throw new Error("Method not implemented.");
    }
}
exports.MySQLEngine = MySQLEngine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines.sqlite3", [
    MySQLEngine
]);
