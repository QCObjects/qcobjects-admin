import{b as h}from"./chunk-64ZU2WSF.js";import{a as o,d as g}from"./chunk-LILTOOK2.js";var m=g(l=>{Object.defineProperty(l,"__esModule",{value:!0});l.GridTableComponent=void 0;var u=h(),d=class extends u.Component{constructor(t){if(super(t),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=t.gridColumns,typeof this.body<"u"){let e=o(function(s){let a=s.body.getAttribute("value-field")||"result",n=s.data[a];return n.length>0?Object.keys(s.buildRowObject(n[0])).filter(r=>s.hasColumn(r)).map(r=>`<th scope="col">${s.getColumnLabel(r)}</th>`).join(""):""},"renderGridColumns"),i=o(function(s){let a=s.body.getAttribute("value-field")||"result",n=s.data[a];return n.length>0?n.map(r=>`<tr>${Object.values(s.buildRowObject(r)).map(c=>`<td>${c}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(e),this.processorHandler.setProcessor(i)}this.appendLoading()}hasColumn(t){let e=!1;return typeof this.gridColumns<"u"&&this.gridColumns.length>0?typeof this.gridColumns.filter(s=>s.name===t).pop()<"u"&&(e=!0):e=!0,e}getColumnLabel(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e=this.gridColumns.filter(s=>s.name===t).pop()?.label||t),e}buildRowObject(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e={},this.gridColumns.map(i=>(e[i.name]=i.value(t),i))),e}done(t){let e=super.done(t);return this.removeLoading(),e}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};o(d,"GridTableComponent");l.GridTableComponent=d;(0,u.Package)("com.qcobjects.sdk.components",[d])});export{m as a};
//# sourceMappingURL=chunk-3IM7KRRC.js.map
