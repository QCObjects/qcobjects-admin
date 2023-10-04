"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBEngine = exports.DBCondition = void 0;
const qcobjects_1 = require("qcobjects");
class DBCondition {
    static AND({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "AND" };
    }
    static OR({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "OR" };
    }
    static EQUAL({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "EQUAL" };
    }
    static NOR({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "NOR" };
    }
    static IN({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "IN" };
    }
    static NOT_IN({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "NOT_IN" };
    }
    static NOT({ fieldName, fieldValue }) {
        return { fieldName, fieldValue, fieldCondition: "NOT" };
    }
}
exports.DBCondition = DBCondition;
class DBEngine {
    constructor() {
        this.__filter = [];
    }
    async getAllRecords() {
        throw new Error("Method not implemented.");
    }
    filter(..._filter) {
        throw new Error("Method not implemented.");
    }
    collection(collectionName) {
        throw new Error("Method not implemented.");
    }
    database(collectionName) {
        throw new Error("Method not implemented.");
    }
    async get() {
        throw new Error("Method not implemented.");
    }
    async save(item) {
        throw new Error("Method not implemented.");
    }
}
exports.DBEngine = DBEngine;
(0, qcobjects_1.Package)("com.qcobjects.data.db.engines", [
    DBEngine
]);
