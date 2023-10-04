import { Package, VO } from "qcobjects";
import { DBEngine, IDBEngine, IDBFilter } from "../com.qcobjects.data.db.engines";

export class MongoDBEngine extends DBEngine implements IDBEngine{
    __filter: IDBFilter[] = [];
    name = "mongodb";
    databaseName = "mongodb";

    async getAllRecords(): Promise<VO[]> {
        throw new Error("Method not implemented.");
    }

    filter(..._filter: IDBFilter[]): IDBEngine {
        this.__filter = _filter;
        return this;
    }

    async get(): Promise<VO> {
        throw new Error("Method not implemented.");
    }
    
    async save(item:VO): Promise<VO> {
        throw new Error("Method not implemented.");
    }    

}

Package("com.qcobjects.data.db.engines.sqlite3",[
    MongoDBEngine
]);