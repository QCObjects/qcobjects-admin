import{a as d,b as m,d as p}from"./chunk-4BSOXMA3.js";var b=m(u=>{Object.defineProperty(u,"__esModule",{value:!0});var c=p(),r=class extends c.Component{constructor(e){if(super(e),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=e.gridColumns,typeof this.body<"u"){let t=d(function(s){let o=s.body.getAttribute("value-field")||"result",n=s.data[o];return n.length>0?Object.keys(s.buildRowObject(n[0])).map(l=>`<th scope="col">${s.getColumnLabel(l)}</th>`).join(""):""},"renderGridColumns"),i=d(function(s){let o=s.body.getAttribute("value-field")||"result",n=s.data[o];return n.length>0?n.map(l=>`<tr>${Object.values(s.buildRowObject(l)).map(h=>`<td>${h}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(t),this.processorHandler.setProcessor(i)}this.appendLoading()}getColumnLabel(e){let t=e;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(t=this.gridColumns.filter(s=>s.name===e).pop()?.label||e),t}buildRowObject(e){let t=e;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&this.gridColumns.map(i=>(t[i.name]=i.value(e),i)),t}done(e){let t=super.done(e);return this.removeLoading(),t}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};d(r,"GridTableComponent");var a=class extends r{constructor(e){e.gridColumns=[{name:"name",label:"Name",value:t=>t.name}],super(e)}};d(a,"VersionGridTableComponent");(0,c.Package)("com.qcobjects.sdk.components",[r]);(0,c.Package)("com.qcobjects.admin.components",[a])});export{b as a};
//# sourceMappingURL=chunk-JI3RRBJP.js.map
