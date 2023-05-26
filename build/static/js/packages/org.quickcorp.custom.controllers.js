/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = __importStar(require("qcobjects"));
const qcobjects_sdk_1 = require("qcobjects-sdk");
(0, qcobjects_1.Package)("org.quickcorp.custom.controllers", [
    class MainController extends qcobjects_1.Controller {
        constructor(controller) {
            qcobjects_1.logger.debug("Initializing MainController...");
            super(controller);
        }
        done(...args) {
            const _ret_ = super.done(args);
            if (!MainController.loaded) {
                const s = (0, qcobjects_1._DOMCreateElement)("style");
                s.innerHTML = `
        @import url(css/body-layout.css);
        `;
                document.body.append(s);
                qcobjects_1.logger.debug("MainController loaded");
                MainController.loaded = true;
            }
            return _ret_;
        }
    },
    class SideNavController extends qcobjects_1.Controller {
        constructor(controller) {
            qcobjects_1.logger.debug("Initializing SideNavController...");
            super(controller);
            this.effect = null;
            this.component = controller.component;
            if (this.component.shadowed) {
                this.componentRoot = this.component.shadowRoot;
            }
            else {
                this.componentRoot = this.component.body;
            }
        }
        done(...args) {
            const _ret_ = super.done(args);
            this.effect = (0, qcobjects_1.New)(qcobjects_sdk_1.Fade, {
                duration: 300
            });
            qcobjects_1.default.sideNavController = this;
            this.close();
            return _ret_;
        }
        open() {
            if (this.componentRoot !== null) {
                if (this.effect != null) {
                    this.effect.apply(this.componentRoot, 0, 1);
                }
                this.componentRoot?.classList.add("open");
                // eslint-disable-next-line no-extra-boolean-cast
                if (!!this.componentRoot?.parentElement) {
                    if (this.componentRoot.parentElement !== null) {
                        this.componentRoot.parentElement.subelements(".navbtn")[0].style.display = "none";
                        this.componentRoot.parentElement.subelements(".closebtn")[0].style.display = "block";
                    }
                }
            }
            this.visibility = true;
            return this.visibility;
        }
        close() {
            if (this.componentRoot !== null) {
                if (this.effect != null) {
                    this.effect.apply(this.componentRoot, 1, 0);
                }
                this.componentRoot?.classList.remove("open");
                // eslint-disable-next-line no-extra-boolean-cast
                if (!!this.componentRoot?.parentElement) {
                    this.componentRoot.parentElement.subelements(".navbtn")[0].style.display = "block";
                    this.componentRoot.parentElement.subelements(".closebtn")[0].style.display = "none";
                }
            }
            this.visibility = false;
            return this.visibility;
        }
        toggle() {
            if (this.visibility) {
                this.close();
            }
            else {
                this.open();
            }
        }
    },
    class HeaderController extends qcobjects_1.Controller {
        constructor(controller) {
            super(controller);
            qcobjects_1.logger.debug("Header controller initialized");
        }
        loadInstallerButton() {
            const componentRoot = (this.component.shadowed != null)
                ? this.component.shadowRoot
                : this.component.body;
            componentRoot.subelements("#installerbutton").map((element) => {
                this.installer = (0, qcobjects_1.New)((0, qcobjects_1.ClassFactory)("Installer"), element);
                return element;
            });
        }
        done(...args) {
            const _ret_ = super.done(args);
            this.loadInstallerButton();
            return _ret_;
        }
    }
]);
