"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLite3Engine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("./com.qcobjects.data.db.engines");
class SQLite3Engine extends com_qcobjects_data_db_engines_1.DBEngine {
    constructor() {
        super(...arguments);
        this.__filter = [];
        this.name = "sqlite3";
        this.databaseName = "sqlite3";
    }
    getAllRecords() {
        throw new Error("Method not implemented.");
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    get() {
        const whereClause = this.__filter.map(({ fieldName, fieldValue, fieldCondition }) => {
            return `${fieldName}${fieldCondition}"${fieldValue}"`;
        }).join(" ");
        const sqlStatement = `SELECT * FROM ${this.__collection} WHERE ${whereClause}`;
        throw new Error("Method not implemented.");
    }
    collection(collectionName) {
        this.__collection = collectionName;
        return this;
    }
    save() {
        throw new Error("Method not implemented.");
    }
}
exports.SQLite3Engine = SQLite3Engine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines.sqlite3", [
    SQLite3Engine
]);
