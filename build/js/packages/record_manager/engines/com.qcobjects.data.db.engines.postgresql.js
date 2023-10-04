"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLEngine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("../com.qcobjects.data.db.engines");
class PostgreSQLEngine extends com_qcobjects_data_db_engines_1.DBEngine {
    constructor() {
        super(...arguments);
        this.__filter = [];
        this.name = "sqlite3";
        this.databaseName = "sqlite3";
    }
    async getAllRecords() {
        throw new Error("Method not implemented.");
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    async get() {
        throw new Error("Method not implemented.");
    }
    async save(item) {
        throw new Error("Method not implemented.");
    }
}
exports.PostgreSQLEngine = PostgreSQLEngine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines.sqlite3", [
    PostgreSQLEngine
]);
