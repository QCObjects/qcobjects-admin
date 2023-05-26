import { Component, ComponentDoneResponse, ComponentParams } from "qcobjects";
type GridTableColum = {
    name: string;
    label: string;
    value: (row: any) => string;
};
type GridComponentParams = ComponentParams & {
    columns: string;
    rows: string;
    gridColumns?: Array<GridTableColum>;
};
declare class GridTableComponent extends Component {
    name: string;
    shadowed: boolean;
    tplsource: string;
    template: string;
    gridColumns?: Array<any>;
    __instanceID: number | undefined;
    constructor(o: GridComponentParams);
    hasColumn(k: string): boolean;
    getColumnLabel(k: string): string;
    buildRowObject(row: any): any;
    done(standardResponse: ComponentDoneResponse): Promise<ComponentDoneResponse>;
    appendLoading(): void;
    removeLoading(): void;
}
export { GridTableColum, GridComponentParams, GridTableComponent };
