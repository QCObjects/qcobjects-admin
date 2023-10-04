import { Package, VO } from "qcobjects";
import { DBEngine, IDBEngine, IDBFilter } from "../com.qcobjects.data.db.engines";

export class PostgreSQLEngine extends DBEngine implements IDBEngine{
    __filter: IDBFilter[] = [];
    name = "sqlite3";
    databaseName = "sqlite3";

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
    PostgreSQLEngine
]);