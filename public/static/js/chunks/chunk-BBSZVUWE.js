import{a as _}from"./chunk-3IM7KRRC.js";import{b}from"./chunk-64ZU2WSF.js";import{a,d as p}from"./chunk-LILTOOK2.js";var k=p(h=>{Object.defineProperty(h,"__esModule",{value:!0});var i=b(),v=_(),r=class extends v.GridTableComponent{constructor(e){e.gridColumns=[{name:"name",label:"Name",value:s=>`<a class="package_details" href="${s["repository.url"]?.replace("git+","")}">${s.name}</a>`},{name:"description",label:"Description",value:s=>s.description},{name:"version",label:"Version",value:s=>s.version},{name:"installed",label:"Is Installed?",value:s=>{let l=`<a class="install_link" href="/admin/install_plugins/${s.name}">Install</a>`,n=`<a class="uninstall_link" href="/admin/uninstall_plugins/${s.name}">Uninstall</a>`;return s.installed?n:l}},{name:"settings",label:"Settings",value:s=>`<a class="settings_link" href="/admin/settings/${s.name}">Settings</a>`}],super(e)}};a(r,"PluginsGridTableComponent");var c=class extends v.GridTableComponent{constructor(e){e.gridColumns=[{name:"name",label:"Name",value:s=>`<a class="package_details" href="${s["repository.url"]?.replace("git+","")}">${s.name}</a>`},{name:"description",label:"Description",value:s=>s.description},{name:"version",label:"Version",value:s=>s.version},{name:"installed",label:"Is Installed?",value:s=>{let l=`<a class="install_link" href="/admin/install_handlers/${s.name}">Install</a>`,n=`<a class="uninstall_link" href="/admin/uninstall_handlers/${s.name}">Uninstall</a>`;return s.installed?n:l}},{name:"settings",label:"Settings",value:s=>`<a class="settings_link" href="/admin/settings/${s.name}">Settings</a>`}],super(e)}};a(c,"HandlersGridTableComponent");var d=class extends v.GridTableComponent{constructor(e){e.gridColumns=[{name:"name",label:"Name",value:s=>`<a class="package_details" href="${s["repository.url"]?.replace("git+","")}">${s.name}</a>`},{name:"description",label:"Description",value:s=>s.description},{name:"version",label:"Version",value:s=>s.version},{name:"installed",label:"Is Installed?",value:s=>{let l=`<a class="install_link" href="/admin/install_libs/${s.name}">Install</a>`,n=`<a class="uninstall_link" href="/admin/uninstall_libs/${s.name}">Uninstall</a>`;return s.installed?n:l}},{name:"settings",label:"Settings",value:s=>`<a class="settings_link" href="/admin/settings/${s.name}">Settings</a>`}],super(e)}};a(d,"LibsGridTableComponent");var o=class extends i.Component{constructor(){super(...arguments),this.assignRoutingParams=!0,this.shadowed=!0}};a(o,"BlockMenuComponent");var u=class extends i.Component{constructor(){super(...arguments),this.assignRoutingParams=!0,this.shadowed=!0}};a(u,"HeaderComponent");var m=class extends i.Component{constructor(){super(...arguments),this.shadowed=!0,this.tplsource="inline",this.name="shadowed-card",this.template=`
  <!-- shadowed card
  To use this card, insert this component tag in your container file
       <card name="shadowed-card" shadowed="true" data-title="" data-description="" data-image=""></component>
  -->
  <style>
    /* If you use shadowed=true
    This style will be automatically shadowed in the browser */
    @import url("./css/components/card.css");
  </style>
  
  <div class="card">
    <div class="img">
    <slot id="slot-logo" name="logo"><img src="img/placeholder.svg" alt="Avatar" style="width:100%"></slot>
    </div>
    <div class="container">
      <div class="title">
        <slot id="slot-card-title" name="card_title"></slot>
      </div>
      <div class="description">
      <slot id="slot-card-description" name="card_description"></slot>
      </div>
      <div class="card-button">
        <slot id="slot-card-button" name="card-button" ></slot>
      </div>
    </div>
  </div>    
  `}};a(m,"ShadowedCard");var g=class extends i.Component{constructor(e){e.body?.setAttribute("serviceClass","VersionStringService"),e.body?.setAttribute("response-to","data"),super(e),this.name="version-string",this.tplsource="inline",this.template=`
  <p>Version: QCObjects {{qcobjects}} CLI: {{cli}} SDK: {{sdk}}</p>
  `}};a(g,"VersionComponent");(0,i.Package)("com.qcobjects.admin.components",[r,c,d,o,u,m,g])});export{k as a};
//# sourceMappingURL=chunk-BBSZVUWE.js.map
