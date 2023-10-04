import { Package, VO } from "qcobjects";
import { DBEngine, IDBEngine, IDBFilter } from "../com.qcobjects.data.db.engines";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {SQLite3Gateway} = require("qcobjects-admin-lib-db-sqlite3").default;
const gateway = new SQLite3Gateway();

export class SQLite3Engine extends DBEngine implements IDBEngine{
    __filter: IDBFilter[] = [];
    __collection!: string;
    name = "sqlite3";
    databaseName = "sqlite3";
    __fields = "id INTEGER PRIMARY KEY, data TEXT";

    async getAllRecords(): Promise<VO[]> {
        (async () => {
            await gateway.createDatabase(this.databaseName);
        })();

        const queryContainer = async () => {
            return await gateway.queryContainer(this.databaseName, this.__collection, `
              SELECT rowId,id,partitionKey,Country,parents,children,address,isRegistered,lastName from tabletest;
            `,{});
        };
        return (async ()=> {
            return await queryContainer();
        })();
    }

    filter(..._filter: IDBFilter[]): IDBEngine {
        this.__filter = _filter;
        return this;
    }

    async get(): Promise<VO> {
        const whereClause:string = this.__filter.map(({fieldName, fieldValue, fieldCondition})=>{
            return `${fieldName}${fieldCondition}"${fieldValue}"`;
        }).join(" AND ");
        const sqlStatement = `SELECT rowId,* FROM ${this.__collection} WHERE ${whereClause};`;


        const queryContainer = async () => {
            return await gateway.queryContainer(this.databaseName, this.__collection, `
              ${sqlStatement}
            `,{});
        };
        return (async ()=> {
            return await queryContainer();
        })();
        
    }

    collection(collectionName: string): IDBEngine {
        this.__collection = collectionName;
        return this;
    }

    database(databaseName: string): IDBEngine {
        this.databaseName = databaseName;
        return this;
    }

    
    async save(item:VO): Promise<VO> {
        return await gateway.updateFamilyItem(this.databaseName, this.__collection, item);
    }

}

Package("com.qcobjects.data.db.engines.sqlite3",[
    SQLite3Engine
]);