"use strict";

import { Package, Component, ComponentParams } from "qcobjects";
import { GridComponentParams, GridTableComponent } from "./com.qcobjects.sdk.components";

class PluginsGridTableComponent extends GridTableComponent {

  constructor(component:GridComponentParams){
      component.gridColumns = [
          {
              name:"name",
              label: "Name",
              value: (row:any)=> {
                  return `<a class="package_details" href="${row["repository.url"]?.replace("git+","")}">${row.name}</a>`;
              }
          },
          {
              name:"description",
              label:"Description",
              value: (row:any) => {
                  return row.description;
              }
          },
          {
              name:"version",
              label:"Version",
              value: (row:any) => {
                  return row.version;
              }
          },
          {
              name:"installed",
              label:"Is Installed?",
              value: (row:any) => {
                  const linkToInstall = `<a class="install_link" href="/admin/install_plugins/${row.name}">Install</a>`;
                  const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_plugins/${row.name}">Uninstall</a>`;
                  return row.installed?linkToUninstall:linkToInstall;
              }
          },
          {
              name:"settings",
              label:"Settings",
              value: (row:any) => {
                  return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
              }
          }
      ];
      super(component);
  }

}

class HandlersGridTableComponent extends GridTableComponent {

  constructor(component:GridComponentParams){
      component.gridColumns = [
          {
              name:"name",
              label: "Name",
              value: (row:any)=> {
                  return `<a class="package_details" href="${row["repository.url"]?.replace("git+","")}">${row.name}</a>`;
              }
          },
          {
              name:"description",
              label:"Description",
              value: (row:any) => {
                  return row.description;
              }
          },
          {
              name:"version",
              label:"Version",
              value: (row:any) => {
                  return row.version;
              }
          },
          {
              name:"installed",
              label:"Is Installed?",
              value: (row:any) => {
                  const linkToInstall = `<a class="install_link" href="/admin/install_handlers/${row.name}">Install</a>`;
                  const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_handlers/${row.name}">Uninstall</a>`;
                  return row.installed?linkToUninstall:linkToInstall;
              }
          },
          {
              name:"settings",
              label:"Settings",
              value: (row:any) => {
                  return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
              }
          }
      ];
      super(component);
  }

}

class LibsGridTableComponent extends GridTableComponent {

  constructor(component:GridComponentParams){
      component.gridColumns = [
          {
              name:"name",
              label: "Name",
              value: (row:any)=> {
                  return `<a class="package_details" href="${row["repository.url"]?.replace("git+","")}">${row.name}</a>`;
              }
          },
          {
              name:"description",
              label:"Description",
              value: (row:any) => {
                  return row.description;
              }
          },
          {
              name:"version",
              label:"Version",
              value: (row:any) => {
                  return row.version;
              }
          },
          {
              name:"installed",
              label:"Is Installed?",
              value: (row:any) => {
                  const linkToInstall = `<a class="install_link" href="/admin/install_libs/${row.name}">Install</a>`;
                  const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_libs/${row.name}">Uninstall</a>`;
                  return row.installed?linkToUninstall:linkToInstall;
              }
          },
          {
              name:"settings",
              label:"Settings",
              value: (row:any) => {
                  return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
              }
          }
      ];
      super(component);
  }

}

class BlockMenuComponent extends Component {
  assignRoutingParams = true;
  shadowed = true;
}

class HeaderComponent extends Component {
  assignRoutingParams = true;
  shadowed = true;
}

class ShadowedCard extends Component {
  shadowed= true;
  tplsource = "inline";
  name = "shadowed-card";
  template = `
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
  `;
}

class VersionComponent extends Component {
  name = "version-string";
  tplsource = "inline";
  template = `
  <p>Version: QCObjects {{qcobjects}} CLI: {{cli}} SDK: {{sdk}}</p>
  `;
  
  constructor (component:ComponentParams){
    component.body?.setAttribute("serviceClass", "VersionStringService");
    component.body?.setAttribute("response-to", "data");
    super(component);
  }
}


Package("com.qcobjects.admin.components", [
  PluginsGridTableComponent,
  HandlersGridTableComponent,
  LibsGridTableComponent,
  BlockMenuComponent,
  HeaderComponent,
  ShadowedCard,
  VersionComponent
]);
