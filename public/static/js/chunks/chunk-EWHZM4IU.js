import{a as l,b as v,d as _}from"./chunk-4BSOXMA3.js";var b=v(h=>{Object.defineProperty(h,"__esModule",{value:!0});var g=_(),a=class extends g.Component{constructor(s){if(super(s),this.name="grid-table",this.shadowed=!0,this.tplsource="inline",this.template=`
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
    </div>`,this.gridColumns=s.gridColumns,typeof this.body<"u"){let e=l(function(t){let m=t.body.getAttribute("value-field")||"result",i=t.data[m];return i.length>0?Object.keys(t.buildRowObject(i[0])).filter(r=>t.hasColumn(r)).map(r=>`<th scope="col">${t.getColumnLabel(r)}</th>`).join(""):""},"renderGridColumns"),n=l(function(t){let m=t.body.getAttribute("value-field")||"result",i=t.data[m];return i.length>0?i.map(r=>`<tr>${Object.values(t.buildRowObject(r)).map(p=>`<td>${p}</td>`).join("")}</tr>`).join(""):""},"renderGridRows");this.processorHandler.setProcessor(e),this.processorHandler.setProcessor(n)}this.appendLoading()}hasColumn(s){let e=!1;return typeof this.gridColumns<"u"&&this.gridColumns.length>0?typeof this.gridColumns.filter(t=>t.name===s).pop()<"u"&&(e=!0):e=!0,e}getColumnLabel(s){let e=s;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e=this.gridColumns.filter(t=>t.name===s).pop()?.label||s),e}buildRowObject(s){let e=s;return typeof this.gridColumns<"u"&&this.gridColumns.length>0&&(e={},this.gridColumns.map(n=>(e[n.name]=n.value(s),n))),e}done(s){let e=super.done(s);return this.removeLoading(),e}appendLoading(){this.body.innerHTML+=`
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
        `}removeLoading(){this.body.querySelector(`div[id=component_${this.__instanceID}_loading]`)?.remove()}};l(a,"GridTableComponent");var d=class extends a{constructor(s){s.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let n=`<a class="install_link" href="/admin/install_plugins/${e.name}">Install</a>`,t=`<a class="uninstall_link" href="/admin/uninstall_plugins/${e.name}">Uninstall</a>`;return e.installed?t:n}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(s)}};l(d,"PluginsGridTableComponent");var o=class extends a{constructor(s){s.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let n=`<a class="install_link" href="/admin/install_handlers/${e.name}">Install</a>`,t=`<a class="uninstall_link" href="/admin/uninstall_handlers/${e.name}">Uninstall</a>`;return e.installed?t:n}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(s)}};l(o,"HandlersGridTableComponent");var u=class extends a{constructor(s){s.gridColumns=[{name:"name",label:"Name",value:e=>`<a class="package_details" href="${e["repository.url"]?.replace("git+","")}">${e.name}</a>`},{name:"description",label:"Description",value:e=>e.description},{name:"version",label:"Version",value:e=>e.version},{name:"installed",label:"Is Installed?",value:e=>{let n=`<a class="install_link" href="/admin/install_libs/${e.name}">Install</a>`,t=`<a class="uninstall_link" href="/admin/uninstall_libs/${e.name}">Uninstall</a>`;return e.installed?t:n}},{name:"settings",label:"Settings",value:e=>`<a class="settings_link" href="/admin/settings/${e.name}">Settings</a>`}],super(s)}};l(u,"LibsGridTableComponent");(0,g.Package)("com.qcobjects.sdk.components",[a]);(0,g.Package)("com.qcobjects.admin.components",[d,o,u])});export{b as a};
//# sourceMappingURL=chunk-EWHZM4IU.js.map
