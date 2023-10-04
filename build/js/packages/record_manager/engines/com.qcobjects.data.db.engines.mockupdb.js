"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockupDBEngine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("../com.qcobjects.data.db.engines");
const mockData_1 = __importDefault(require("../mockData"));
const sampleData = {
    items: mockData_1.default
};
class MockupDBEngine extends com_qcobjects_data_db_engines_1.DBEngine {
    constructor() {
        super(...arguments);
        this.__filter = [];
        this.name = "mockupdb";
        this.databaseName = "mockupdb";
    }
    async getAllRecords() {
        const items = await (async () => {
            const data = qcobjects_1.CONFIG.get("backend", { db_engine: { data: sampleData } }).db_engine.data || sampleData;
            return data.items;
        })();
        return items;
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    whereClause() {
        const _whereClause = this.__filter.map(({ fieldName, fieldValue, fieldCondition }) => {
            return `${fieldName}${fieldCondition}"${fieldValue}"`;
        }).join(" ");
        return _whereClause;
    }
    async get() {
        const item = (async () => {
            return (await this.getAllRecords()).pop();
        })();
        return item;
    }
    collection(collectionName) {
        this.__collection = collectionName;
        return this;
    }
    async save(item) {
        throw new Error("Method not implemented.");
    }
}
exports.MockupDBEngine = MockupDBEngine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines.mockupdb", [
    MockupDBEngine
]);
