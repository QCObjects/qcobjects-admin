"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridTableComponent = void 0;
const qcobjects_1 = require("qcobjects");
class GridTableComponent extends qcobjects_1.Component {
    constructor(o) {
        super(o);
        this.name = "grid-table";
        this.shadowed = true;
        this.tplsource = "inline";
        this.template = `
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
        this.gridColumns = o.gridColumns;
        if (typeof this.body !== "undefined") {
            const renderGridColumns = function (component) {
                const valueField = component.body.getAttribute("value-field") || "result";
                const dataValue = component.data[valueField];
                return (dataValue.length > 0) ? (Object.keys(component.buildRowObject(dataValue[0]))
                    .filter(c => component.hasColumn(c))
                    .map(k => `<th scope="col">${component.getColumnLabel(k)}</th>`).join("")) : ("");
            };
            const renderGridRows = function (component) {
                const valueField = component.body.getAttribute("value-field") || "result";
                const dataValue = component.data[valueField];
                return (dataValue.length > 0) ? (dataValue
                    .map(r => `<tr>${Object.values(component.buildRowObject(r))
                    .map(c => `<td>${c}</td>`).join("")}</tr>`).join("")) : ("");
            };
            this.processorHandler.setProcessor(renderGridColumns);
            this.processorHandler.setProcessor(renderGridRows);
        }
        this.appendLoading();
    }
    hasColumn(k) {
        let _ret_ = false;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length > 0) {
            const c = this.gridColumns.filter((column) => {
                return column.name === k;
            }).pop();
            if (typeof c !== "undefined") {
                _ret_ = true;
            }
        }
        else {
            _ret_ = true;
        }
        return _ret_;
    }
    getColumnLabel(k) {
        let _ret_ = k;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length > 0) {
            const c = this.gridColumns.filter((column) => {
                return column.name === k;
            }).pop();
            _ret_ = c?.label || k;
        }
        return _ret_;
    }
    buildRowObject(row) {
        let _ret_ = row;
        if (typeof this.gridColumns !== "undefined" && this.gridColumns.length > 0) {
            _ret_ = {};
            this.gridColumns.map((column) => {
                _ret_[column.name] = column.value(row);
                return column;
            });
        }
        return _ret_;
    }
    done(standardResponse) {
        const _ret_ = super.done(standardResponse);
        this.removeLoading();
        return _ret_;
    }
    appendLoading() {
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
    removeLoading() {
        this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove();
    }
}
exports.GridTableComponent = GridTableComponent;
(0, qcobjects_1.Package)("com.qcobjects.sdk.components", [
    GridTableComponent
]);
