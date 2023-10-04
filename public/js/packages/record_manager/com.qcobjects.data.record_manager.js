"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordManager = exports.RecordFilter = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engine_gateway_1 = require("./com.qcobjects.data.db.engine.gateway");
class RecordFilter {
}
exports.RecordFilter = RecordFilter;
class RecordManager extends qcobjects_1.InheritClass {
    constructor() {
        super(...arguments);
        this.__filter = [];
    }
    filter(..._filter) {
        this.__filter = _filter;
        return this;
    }
    async records() {
        return (0, com_qcobjects_data_db_engine_gateway_1.getEngine)()
            .database(qcobjects_1.CONFIG.get("backend", { db_engine: { name: "default" } }).db_engine.name)
            .collection((0, qcobjects_1.__getType__)(this))
            .filter(...this.__filter).getAllRecords();
    }
    async push(item) {
        return (0, com_qcobjects_data_db_engine_gateway_1.getEngine)()
            .database(qcobjects_1.CONFIG.get("backend", { db_engine: { name: "default" } }).db_engine.name)
            .collection((0, qcobjects_1.__getType__)(this))
            .filter(...this.__filter).save(item);
    }
    async get() {
        return (0, com_qcobjects_data_db_engine_gateway_1.getEngine)()
            .database(qcobjects_1.CONFIG.get("backend", { db_engine: { name: "default" } }).db_engine.name)
            .collection((0, qcobjects_1.__getType__)(this))
            .filter(...this.__filter).get();
    }
}
exports.RecordManager = RecordManager;
(0, qcobjects_1.Package)("com.qcobjects.data.record_manager", [
    RecordManager
]);
