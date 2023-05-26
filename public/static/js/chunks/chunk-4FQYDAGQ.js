import{a,b as v,d as b}from"./chunk-4BSOXMA3.js";var _=v(h=>{Object.defineProperty(h,"__esModule",{value:!0});var m=b(),l=class extends m.Component{constructor(t){if(super(t),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=t.gridColumns,typeof this.body<"u"){let e=a(function(n){let g=n.body.getAttribute("value-field")||"result",i=n.data[g];return i.length>0?Object.keys(n.buildRowObject(i[0])).filter(r=>n.hasColumn(r)).map(r=>`<th scope="col">${n.getColumnLabel(r)}</th>`).join(""):""},"renderGridColumns"),s=a(function(n){let g=n.body.getAttribute("value-field")||"result",i=n.data[g];return i.length>0?i.map(r=>`<tr>${Object.values(n.buildRowObject(r)).map(p=>`<td>${p}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(e),this.processorHandler.setProcessor(s)}this.appendLoading()}hasColumn(t){let e=!1;return typeof this.gridColumns<"u"&&this.gridColumns.length>0?typeof this.gridColumns.filter(n=>n.name===t).pop()<"u"&&(e=!0):e=!0,e}getColumnLabel(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e=this.gridColumns.filter(n=>n.name===t).pop()?.label||t),e}buildRowObject(t){let e=t;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e={},this.gridColumns.map(s=>(e[s.name]=s.value(t),s))),e}done(t){let e=super.done(t);return this.removeLoading(),e}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};a(l,"GridTableComponent");var d=class extends l{constructor(t){t.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let s=`<a class="install_link" href="/admin/install_plugins/${e.name}">Install</a>`;return e.installed?"Installed":s}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(t)}};a(d,"PluginsGridTableComponent");var o=class extends l{constructor(t){t.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let s=`<a class="install_link" href="/admin/install_handlers/${e.name}">Install</a>`;return e.installed?"Installed":s}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(t)}};a(o,"HandlersGridTableComponent");var u=class extends l{constructor(t){t.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let s=`<a class="install_link" href="/admin/install_libs/${e.name}">Install</a>`;return e.installed?"Installed":s}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(t)}};a(u,"LibsGridTableComponent");(0,m.Package)("com.qcobjects.sdk.components",[l]);(0,m.Package)("com.qcobjects.admin.components",[d,o,u])});export{_ as a};
//# sourceMappingURL=chunk-4FQYDAGQ.js.map
