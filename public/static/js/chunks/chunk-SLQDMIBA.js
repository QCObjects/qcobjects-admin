import{a,b as h,d as p}from"./chunk-4BSOXMA3.js";var b=h(c=>{Object.defineProperty(c,"__esModule",{value:!0});var u=p(),r=class extends u.Component{constructor(t){if(super(t),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=t.gridColumns,typeof this.body<"u"){let e=a(function(s){let o=s.body.getAttribute("value-field")||"result",n=s.data[o];return n.length>0?Object.keys(s.buildRowObject(n[0])).filter(l=>s.hasColumn(l)).map(l=>`<th scope="col">${s.getColumnLabel(l)}</th>`).join(""):""},"renderGridColumns"),i=a(function(s){let o=s.body.getAttribute("value-field")||"result",n=s.data[o];return n.length>0?n.map(l=>`<tr>${Object.values(s.buildRowObject(l)).map(m=>`<td>${m}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(e),this.processorHandler.setProcessor(i)}this.appendLoading()}hasColumn(t){let e=!1;return typeof this.gridColumns<"u"&&this.gridColumns.length>0?typeof this.gridColumns.filter(s=>s.name===t).pop()<"u"&&(e=!0):e=!0,e}getColumnLabel(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e=this.gridColumns.filter(s=>s.name===t).pop()?.label||t),e}buildRowObject(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e={},this.gridColumns.map(i=>(e[i.name]=i.value(t),i))),e}done(t){let e=super.done(t);return this.removeLoading(),e}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};a(r,"GridTableComponent");var d=class extends r{constructor(t){t.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let i=`<a class="install_link" href="/admin/install_package/${e.name}">Install</a>`;return e.installed?"Installed":i}}],super(t)}};a(d,"VersionGridTableComponent");(0,u.Package)("com.qcobjects.sdk.components",[r]);(0,u.Package)("com.qcobjects.admin.components",[d])});export{b as a};
//# sourceMappingURL=chunk-SLQDMIBA.js.map
