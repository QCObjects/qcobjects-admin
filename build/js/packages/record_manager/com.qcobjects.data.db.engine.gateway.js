"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEngine = exports.setEngine = exports.engines = exports.DBSelectedEngine = void 0;
const qcobjects_1 = require("qcobjects");
const com_qcobjects_data_db_engines_1 = require("./com.qcobjects.data.db.engines");
const com_qcobjects_data_db_engines_sqlite3_1 = require("./engines/com.qcobjects.data.db.engines.sqlite3");
const com_qcobjects_data_db_engines_postgresql_1 = require("./engines/com.qcobjects.data.db.engines.postgresql");
const com_qcobjects_data_db_engines_mysql_1 = require("./engines/com.qcobjects.data.db.engines.mysql");
const com_qcobjects_data_db_engines_mongodb_1 = require("./engines/com.qcobjects.data.db.engines.mongodb");
const com_qcobjects_data_db_engines_cosmosdb_1 = require("./engines/com.qcobjects.data.db.engines.cosmosdb");
const com_qcobjects_data_db_engines_mockupdb_1 = require("./engines/com.qcobjects.data.db.engines.mockupdb");
class DBSelectedEngine {
}
exports.DBSelectedEngine = DBSelectedEngine;
DBSelectedEngine.selectedEngineName = "sqlite3";
exports.engines = {
    mockupdb: com_qcobjects_data_db_engines_mockupdb_1.MockupDBEngine,
    sqlite3: com_qcobjects_data_db_engines_sqlite3_1.SQLite3Engine,
    postgresql: com_qcobjects_data_db_engines_postgresql_1.PostgreSQLEngine,
    mysql: com_qcobjects_data_db_engines_mysql_1.MySQLEngine,
    mongodb: com_qcobjects_data_db_engines_mongodb_1.MongoDBEngine,
    cosmosdb: com_qcobjects_data_db_engines_cosmosdb_1.CosmosDBEngine
};
const setEngine = (configObj) => {
    if (typeof configObj === "undefined") {
        throw Error(`[db engine] You must setup a db engine in CONFIG. Example: 
        CONFIG.set("backend", {
            db_engine:{
                name:"sqlite3",
                databaseName:"admin.db"
            }
        })`);
    }
    const engineName = configObj.name;
    if (typeof DBSelectedEngine.engineInstance === "undefined") {
        DBSelectedEngine.selectedEngineName = engineName;
        if (`${DBSelectedEngine.selectedEngineName}` === "") {
            throw new Error("DB Engine parameter empty.");
        }
        else {
            if (DBSelectedEngine.selectedEngineName in exports.engines) {
                const EngineClass = exports.engines[DBSelectedEngine.selectedEngineName];
                const engine = new EngineClass();
                DBSelectedEngine.engineInstance = engine;
            }
            else {
                throw new Error(`Engine ${DBSelectedEngine.selectedEngineName} is not available. Use one of: ${Object.keys(exports.engines)}.`);
            }
        }
    }
    return DBSelectedEngine.engineInstance;
};
exports.setEngine = setEngine;
const getEngine = () => {
    const engine = (0, exports.setEngine)(qcobjects_1.CONFIG.get("backend", { db_engine: new com_qcobjects_data_db_engines_1.DBEngine() }).db_engine);
    return engine;
};
exports.getEngine = getEngine;
