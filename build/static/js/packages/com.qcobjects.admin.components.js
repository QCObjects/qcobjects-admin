"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const com_qcobjects_sdk_components_1 = require("./com.qcobjects.sdk.components");
class PluginsGridTableComponent extends com_qcobjects_sdk_components_1.GridTableComponent {
    constructor(component) {
        component.gridColumns = [
            {
                name: "name",
                label: "Name",
                value: (row) => {
                    return `<a class="package_details" href="${row["repository.url"]?.replace("git+", "")}">${row.name}</a>`;
                }
            },
            {
                name: "description",
                label: "Description",
                value: (row) => {
                    return row.description;
                }
            },
            {
                name: "version",
                label: "Version",
                value: (row) => {
                    return row.version;
                }
            },
            {
                name: "installed",
                label: "Is Installed?",
                value: (row) => {
                    const linkToInstall = `<a class="install_link" href="/admin/install_plugins/${row.name}">Install</a>`;
                    const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_plugins/${row.name}">Uninstall</a>`;
                    return row.installed ? linkToUninstall : linkToInstall;
                }
            },
            {
                name: "settings",
                label: "Settings",
                value: (row) => {
                    return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
                }
            }
        ];
        super(component);
    }
}
class HandlersGridTableComponent extends com_qcobjects_sdk_components_1.GridTableComponent {
    constructor(component) {
        component.gridColumns = [
            {
                name: "name",
                label: "Name",
                value: (row) => {
                    return `<a class="package_details" href="${row["repository.url"]?.replace("git+", "")}">${row.name}</a>`;
                }
            },
            {
                name: "description",
                label: "Description",
                value: (row) => {
                    return row.description;
                }
            },
            {
                name: "version",
                label: "Version",
                value: (row) => {
                    return row.version;
                }
            },
            {
                name: "installed",
                label: "Is Installed?",
                value: (row) => {
                    const linkToInstall = `<a class="install_link" href="/admin/install_handlers/${row.name}">Install</a>`;
                    const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_handlers/${row.name}">Uninstall</a>`;
                    return row.installed ? linkToUninstall : linkToInstall;
                }
            },
            {
                name: "settings",
                label: "Settings",
                value: (row) => {
                    return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
                }
            }
        ];
        super(component);
    }
}
class LibsGridTableComponent extends com_qcobjects_sdk_components_1.GridTableComponent {
    constructor(component) {
        component.gridColumns = [
            {
                name: "name",
                label: "Name",
                value: (row) => {
                    return `<a class="package_details" href="${row["repository.url"]?.replace("git+", "")}">${row.name}</a>`;
                }
            },
            {
                name: "description",
                label: "Description",
                value: (row) => {
                    return row.description;
                }
            },
            {
                name: "version",
                label: "Version",
                value: (row) => {
                    return row.version;
                }
            },
            {
                name: "installed",
                label: "Is Installed?",
                value: (row) => {
                    const linkToInstall = `<a class="install_link" href="/admin/install_libs/${row.name}">Install</a>`;
                    const linkToUninstall = `<a class="uninstall_link" href="/admin/uninstall_libs/${row.name}">Uninstall</a>`;
                    return row.installed ? linkToUninstall : linkToInstall;
                }
            },
            {
                name: "settings",
                label: "Settings",
                value: (row) => {
                    return `<a class="settings_link" href="/admin/settings/${row.name}">Settings</a>`;
                }
            }
        ];
        super(component);
    }
}
class BlockMenuComponent extends qcobjects_1.Component {
    constructor() {
        super(...arguments);
        this.assignRoutingParams = true;
        this.shadowed = true;
    }
}
class HeaderComponent extends qcobjects_1.Component {
    constructor() {
        super(...arguments);
        this.assignRoutingParams = true;
        this.shadowed = true;
    }
}
class ShadowedCard extends qcobjects_1.Component {
    constructor() {
        super(...arguments);
        this.shadowed = true;
        this.tplsource = "inline";
        this.name = "shadowed-card";
        this.template = `
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
}
class VersionComponent extends qcobjects_1.Component {
    constructor(component) {
        component.body?.setAttribute("serviceClass", "VersionStringService");
        component.body?.setAttribute("response-to", "data");
        super(component);
        this.name = "version-string";
        this.tplsource = "inline";
        this.template = `
  <p>Version: QCObjects {{qcobjects}} CLI: {{cli}} SDK: {{sdk}}</p>
  `;
    }
}
(0, qcobjects_1.Package)("com.qcobjects.admin.components", [
    PluginsGridTableComponent,
    HandlersGridTableComponent,
    LibsGridTableComponent,
    BlockMenuComponent,
    HeaderComponent,
    ShadowedCard,
    VersionComponent
]);
