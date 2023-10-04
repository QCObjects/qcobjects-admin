import { CONFIG, Package, VO } from "qcobjects";
import { DBEngine, IDBEngine, IDBFilter } from "../com.qcobjects.data.db.engines";
import mockData from "../mockData";

const sampleData = {
    items:mockData
};

export class MockupDBEngine extends DBEngine implements IDBEngine{
    __filter: IDBFilter[] = [];
    __collection!: string;
    name = "mockupdb";
    databaseName = "mockupdb";

    async getAllRecords(): Promise<VO[]> {
        const items = await (async ()=> {
            const data = CONFIG.get("backend", {db_engine:{data:sampleData}}).db_engine.data || sampleData;
            return data.items;
        })();
        return items;
    }

    filter(..._filter: IDBFilter[]): IDBEngine {
        this.__filter = _filter;
        return this;
    }

    whereClause (){
        const _whereClause:string = this.__filter.map(({fieldName, fieldValue, fieldCondition})=>{
            return `${fieldName}${fieldCondition}"${fieldValue}"`;
        }).join(" ");
        return _whereClause;
    }

    async get(): Promise<VO> {
        const item = (async ()=>{
            return (await this.getAllRecords()).pop() as VO;
        })();
        return item;
    }

    collection(collectionName: string): IDBEngine {
        this.__collection = collectionName;
        return this;
    }
    
    async save(item:VO): Promise<VO> {
        throw new Error("Method not implemented.");
    }    

}

Package("com.qcobjects.data.db.engines.mockupdb",[
    MockupDBEngine
]);