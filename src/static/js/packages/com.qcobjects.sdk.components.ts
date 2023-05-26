import { Component, ComponentDoneResponse, ComponentParams, Package } from "qcobjects";

type GridTableColum = {
    name:string;
    label: string;
    value: (row:any) => string;
}

type GridComponentParams = ComponentParams & {
    columns:string;
    rows:string;
    gridColumns?:Array<GridTableColum>;
}

class GridTableComponent extends Component {
    name= "grid-table";
    shadowed= true;
    tplsource= "inline";
    template = `
    <style>
    @import url("css/components/grid-table.css");
    $layout(landscape,css/desktop/components/grid-table.css)
    $layout(portrait,css/mobile/components/grid-table.css)
    </style>
    <div class="container">
    <table>
        <thead>
            <tr class="tr_head">$renderGridColumns()</tr>
        </thead>
        <tbody>
            $renderGridRows()
        </tbody>
    </table>
    </div>`;

    gridColumns?:Array<any>;

    __instanceID: number | undefined;

    constructor(o:GridComponentParams){
        super(o);
        this.gridColumns = o.gridColumns;
        if (typeof this.body !== "undefined"){
            const renderGridColumns = function (component:GridTableComponent){
                const valueField = component.body.getAttribute("value-field") || "result";
                const dataValue = component.data[valueField] as Array<any>;
                return (dataValue.length>0)?(Object.keys(component.buildRowObject(dataValue[0]))
                    .filter(c=>component.hasColumn(c))
                    .map (k=>`<th scope="col">${component.getColumnLabel(k)}</th>`).join("")):("");
            };
            const renderGridRows = function (component:GridTableComponent){
                const valueField = component.body.getAttribute("value-field") || "result";
                const dataValue = component.data[valueField] as Array<any>;
                return (dataValue.length>0)? (dataValue
                    .map(r=>`<tr>${Object.values(component.buildRowObject(r))
                    .map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")):("");
            };
            this.processorHandler.setProcessor(renderGridColumns);
            this.processorHandler.setProcessor(renderGridRows);
        }
        this.appendLoading();
    }

    hasColumn (k:string){
        let _ret_ = false;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length>0){
            const c:GridTableColum | undefined = this.gridColumns.filter((column:GridTableColum) => {
                return column.name === k;
            }).pop();
            if (typeof c !== "undefined"){
                _ret_ = true;
            }
        } else {
            _ret_ = true;
        }
        return _ret_;
    }

    getColumnLabel (k:string){
        let _ret_:string | undefined = k;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length>0){
            const c:GridTableColum | undefined = this.gridColumns.filter((column:GridTableColum)=> {
                return column.name === k;
            }).pop() as GridTableColum | undefined;
            _ret_ = c?.label || k;
        }
        return _ret_;
    }

    buildRowObject (row:any) {
        let _ret_ = row;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length>0){
            _ret_ = {};
            this.gridColumns.map((column:GridTableColum) => {
                _ret_[column.name] = column.value(row);
                return column;
            });
        }
        return _ret_;
    }

    done (standardResponse:ComponentDoneResponse):Promise<ComponentDoneResponse>{
        const _ret_ = super.done(standardResponse);
        this.removeLoading();
        return _ret_;
    }

    appendLoading () {
        this.body.innerHTML += `
        <div id="component_${this.__instanceID}_loading">
            <style>
                .loading_svg {
                    margin:0 auto;
                }
                .loading_container {
                    padding: 0;
                    margin: 0 auto;
                    display: inline-flex;
                    min-width: 100%;
                }
                .text {
                    text-align:center;
                }
            </style>
            <div class="loading_container">
                <img class="loading_svg" src="img/placeholder.svg" width="100px"/>
            </div>
            <div class="text"><p>Please wait while loading...</p></div>
        </div>
        `;
    }

    removeLoading () {
        this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove();
    }        

}




Package("com.qcobjects.sdk.components", [
    GridTableComponent
]);

export {
    GridTableColum,
    GridComponentParams,
    GridTableComponent
};