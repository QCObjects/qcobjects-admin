"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLite3Engine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("../com.qcobjects.data.db.engines");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SQLite3Gateway } = require("qcobjects-admin-lib-db-sqlite3").default;
const gateway = new SQLite3Gateway();
class SQLite3Engine extends com_qcobjects_data_db_engines_1.DBEngine {
    constructor() {
        super(...arguments);
        this.__filter = [];
        this.name = "sqlite3";
        this.databaseName = "sqlite3";
        this.__fields = "id INTEGER PRIMARY KEY, data TEXT";
    }
    async getAllRecords() {
        (async () => {
            await gateway.createDatabase(this.databaseName);
        })();
        const queryContainer = async () => {
            return await gateway.queryContainer(this.databaseName, this.__collection, `
              SELECT rowId,* from ${this.__collection} ;
            `, {});
        };
        return (async () => {
            return await queryContainer();
        })();
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    async get() {
        const whereClause = this.__filter.map(({ fieldName, fieldValue, fieldCondition }) => {
            return `${fieldName}${fieldCondition}"${fieldValue}"`;
        }).join(" AND ");
        const sqlStatement = `SELECT rowId,* FROM ${this.__collection} WHERE ${whereClause};`;
        const queryContainer = async () => {
            return await gateway.queryContainer(this.databaseName, this.__collection, `
              ${sqlStatement}
            `, {});
        };
        return (async () => {
            return await queryContainer();
        })();
    }
    collection(collectionName) {
        this.__collection = collectionName;
        return this;
    }
    database(databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    async save(item) {
        return await gateway.updateFamilyItem(this.databaseName, this.__collection, item);
    }
}
exports.SQLite3Engine = SQLite3Engine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines.sqlite3", [
    SQLite3Engine
]);
