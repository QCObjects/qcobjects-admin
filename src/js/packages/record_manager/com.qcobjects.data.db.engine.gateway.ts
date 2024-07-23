import { CONFIG } from "qcobjects";
import { DBEngine, IDBEngine } from "./com.qcobjects.data.db.engines";
import { SQLite3Engine } from "./engines/com.qcobjects.data.db.engines.sqlite3";
import { PostgreSQLEngine } from "./engines/com.qcobjects.data.db.engines.postgresql";
import { MySQLEngine } from "./engines/com.qcobjects.data.db.engines.mysql";
import { MongoDBEngine } from "./engines/com.qcobjects.data.db.engines.mongodb";
import { CosmosDBEngine } from "./engines/com.qcobjects.data.db.engines.cosmosdb";
import { MockupDBEngine } from "./engines/com.qcobjects.data.db.engines.mockupdb";

export class DBSelectedEngine {
    static selectedEngineName = "sqlite3";
    static engineInstance?:DBEngine|undefined;
}

export const engines = {
    mockupdb:MockupDBEngine,
    sqlite3:SQLite3Engine,
    postgresql:PostgreSQLEngine,
    mysql:MySQLEngine,
    mongodb:MongoDBEngine,
    cosmosdb:CosmosDBEngine
};

export const setEngine = (configObj:IDBEngine) => {
    if (typeof configObj === "undefined"){
        throw Error (`[db engine] You must setup a db engine in CONFIG. Example: 
        CONFIG.set("backend", {
            db_engine:{
                name:"sqlite3",
                databaseName:"admin.db"
            }
        })`);
    }
    const engineName = configObj.name;
    if (typeof DBSelectedEngine.engineInstance === "undefined"){
        DBSelectedEngine.selectedEngineName = engineName;
        if (`${DBSelectedEngine.selectedEngineName}` === ""){
            throw new Error ("DB Engine parameter empty.");
        } else {
            if (DBSelectedEngine.selectedEngineName in engines){
                const EngineClass = engines[DBSelectedEngine.selectedEngineName as keyof typeof engines];
                const engine = new EngineClass();
                DBSelectedEngine.engineInstance = engine;
            } else {
                throw new Error (`Engine ${DBSelectedEngine.selectedEngineName} is not available. Use one of: ${Object.keys(engines)}.`);
            }
        }
    }
    return DBSelectedEngine.engineInstance;
};

export const getEngine = () => {
    const engine = setEngine(CONFIG.get("backend", {db_engine:new DBEngine()}).db_engine as IDBEngine);
    return engine;
};
