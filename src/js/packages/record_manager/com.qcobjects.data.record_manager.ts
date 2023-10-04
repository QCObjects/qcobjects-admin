import { InheritClass, VO, Package, CONFIG, __getType__ } from "qcobjects";
import { IDBFilter, IDBRecordManager } from "./com.qcobjects.data.db.engines";
import { getEngine } from "./com.qcobjects.data.db.engine.gateway";

export type IRecordFilter = IDBFilter;

export class RecordFilter implements IRecordFilter {
    fieldName!: string;
    fieldValue!: string | number | null;
    fieldCondition!: "AND" | "OR";
}

export class RecordManager extends InheritClass implements IDBRecordManager {
    parent?: VO | undefined;
    __filter: IDBFilter[] = [];

    filter(..._filter: IDBFilter[]): IDBRecordManager {
        this.__filter = _filter;
        return this;
    }

    async records(): Promise<VO[]> {
        
        return getEngine()
        .database(CONFIG.get("backend", {db_engine:{name:"default"}}).db_engine.name)
        .collection(__getType__(this))
        .filter(...this.__filter).getAllRecords();
    }

    async push(item: VO): Promise<VO> {
        return getEngine()
        .database(CONFIG.get("backend", {db_engine:{name:"default"}}).db_engine.name)
        .collection(__getType__(this))
        .filter(...this.__filter).save(item);
    }

    async get(): Promise<VO> {
        return getEngine()
        .database(CONFIG.get("backend", {db_engine:{name:"default"}}).db_engine.name)
        .collection(__getType__(this))
        .filter(...this.__filter).get();
    }

}

Package("com.qcobjects.data.record_manager", [
    RecordManager
]);

