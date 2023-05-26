import{a as l,b as h,d as p}from"./chunk-4BSOXMA3.js";var b=h(u=>{Object.defineProperty(u,"__esModule",{value:!0});var c=p(),a=class extends c.Component{constructor(e){if(super(e),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=e.gridColumns,typeof this.body<"u"){let t=l(function(s){let r=s.body.getAttribute("value-field")||"result",n=s.data[r];return n.length>0?Object.keys(s.buildRowObject(n[0])).map(o=>`<th scope="col">${s.getColumnLabel(o)}</th>`).join(""):""},"renderGridColumns"),i=l(function(s){let r=s.body.getAttribute("value-field")||"result",n=s.data[r];return n.length>0?n.map(o=>`<tr>${Object.values(s.buildRowObject(o)).map(m=>`<td>${m}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(t),this.processorHandler.setProcessor(i)}this.appendLoading()}getColumnLabel(e){let t=e;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(t=this.gridColumns.filter(s=>s.name===e).pop()?.label||e),t}buildRowObject(e){let t=e;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&this.gridColumns.map(i=>(t[i.name]=i.value(e),i)),t}done(e){let t=super.done(e);return this.removeLoading(),t}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};l(a,"GridTableComponent");var d=class extends a{constructor(e){e.gridColumns=[{name:"name",label:"Name",value:t=>t.name},{name:"installed",label:"Is Installed?",value:t=>t.installed?"Installed":"Non Installed"}],super(e)}};l(d,"VersionGridTableComponent");(0,c.Package)("com.qcobjects.sdk.components",[a]);(0,c.Package)("com.qcobjects.admin.components",[d])});export{b as a};
//# sourceMappingURL=chunk-HDCMQFKD.js.map
