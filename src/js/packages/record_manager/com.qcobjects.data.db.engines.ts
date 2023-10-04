import { Package, VO } from "qcobjects";


export interface IDBFilter {
    fieldName:string;
    fieldValue:string|number|null;
    fieldCondition:"AND"|"OR"|"EQUAL"|"NOR"|"IN"|"NOT_IN"|"NOT";
}


export class DBCondition {

    static AND({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter {
        return {fieldName, fieldValue, fieldCondition:"AND"} as IDBFilter;
    }

    static OR({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter {
        return {fieldName, fieldValue, fieldCondition:"OR"} as IDBFilter;
    }

    static EQUAL({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter {
        return {fieldName, fieldValue, fieldCondition:"EQUAL"} as IDBFilter;
    }

    static NOR({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter {
        return {fieldName, fieldValue, fieldCondition:"NOR"} as IDBFilter;
    }

    static IN({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter{
        return {fieldName, fieldValue, fieldCondition:"IN"} as IDBFilter;
    }

    static NOT_IN({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter{
        return {fieldName, fieldValue, fieldCondition:"NOT_IN"} as IDBFilter;
    }

    static NOT({fieldName, fieldValue}:{fieldName:string,fieldValue:any}):IDBFilter{
        return {fieldName, fieldValue, fieldCondition:"NOT"} as IDBFilter;
    }

}

export interface IDBEngine {
    name:string;
    databaseName:string;
    __filter: Array<IDBFilter>;
    __collection:string;

    getAllRecords():Promise<Array<VO>>;
    filter(..._filter:Array<IDBFilter>):IDBEngine;
    get():Promise<VO>;
    save(item:VO):Promise<VO>;
    collection(collectionName:string):IDBEngine;
    database(collectionName:string):IDBEngine;

}

export interface IDBRecordManager {
    parent?: VO;
    __filter: Array<IDBFilter>;

    filter(..._filter:Array<IDBFilter>):IDBRecordManager;
    records ():Promise<Array<VO>>;
    push(item:VO):Promise<VO>;
    get():Promise<VO>;

}

export class DBEngine implements IDBEngine {
    __filter: IDBFilter[] = [];
    __collection!:string;
    name!: string;
    databaseName!: string;

    async getAllRecords(): Promise<VO[]> {
        throw new Error("Method not implemented.");
    }

    filter(..._filter: IDBFilter[]): IDBEngine {
        throw new Error("Method not implemented.");
    }

    collection(collectionName:string): IDBEngine {
        throw new Error("Method not implemented.");
    }

    database(collectionName: string): IDBEngine {
        throw new Error("Method not implemented.");
    }

    async get(): Promise<VO> {
        throw new Error("Method not implemented.");
    }
    
    async save(item:VO): Promise<VO> {
        throw new Error("Method not implemented.");
    }

}

Package("com.qcobjects.data.db.engines",[
    DBEngine
]);