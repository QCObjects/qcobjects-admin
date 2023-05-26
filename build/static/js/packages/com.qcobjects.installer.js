/* eslint-disable no-unreachable */
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
(0, qcobjects_1.Package)("com.qcobjects.installer", [
    class Installer extends qcobjects_1.InheritClass {
        /**
         * Creates an instance of Installer.
         * @date 18/04/2023 - 22:27:17
         *
         * @constructor
         * @param {HTMLElement} root
         */
        constructor(root) {
            super();
            this.root = root;
            window.addEventListener("beforeinstallprompt", () => this.beforeinstallprompt.bind(this), false);
            window.addEventListener("appinstalled", () => this.installed.bind(this), false);
            root.addEventListener("click", () => this.install.bind(this));
            root.addEventListener("touchend", () => this.install.bind(this));
            window.matchMedia("(display-mode: standalone)").addEventListener("change", (evt) => {
                let displayMode = "browser";
                if (evt.matches) {
                    displayMode = "standalone";
                }
                qcobjects_sdk_1.NotificationComponent.success(`TWA in ${displayMode} Mode`);
            });
            qcobjects_1.default.set("installer", this);
        }
        /**
         * It is executed before the install prompt event
         * @date 18/04/2023 - 22:27:30
         *
         * @param {Event} e
         * @returns {boolean}
         */
        beforeinstallprompt(e) {
            qcobjects_1.logger.debug("registering installer event");
            e.preventDefault();
            qcobjects_1.default.set("promptEvent", e);
            this.root.classList.add("available");
            return false;
        }
        /**
         * it works after the install event
         * @date 18/04/2023 - 22:28:36
         */
        installed() {
            qcobjects_1.logger.debug("app is already installed");
            qcobjects_1.default.set("promptEvent", null);
            //         This fires after onbeforinstallprompt OR after manual add to homescreen.
            this.root.classList.remove("available");
        }
        /**
         * it executes the install after the button click
         * @date 18/04/2023 - 22:29:11
         */
        install() {
            const root = this.root;
            qcobjects_1.logger.debug("installer actioned");
            let promptEvent = qcobjects_1.default.get("promptEvent", null);
            if (promptEvent) {
                qcobjects_1.logger.debug("prompt event");
                promptEvent.prompt();
                promptEvent.userChoice
                    .then(function (choiceResult) {
                    if (choiceResult.outcome === "accepted") {
                        // The user actioned the prompt (good or bad).
                        // good is handled in
                        root.classList.remove("available");
                    }
                    else {
                        qcobjects_1.logger.debug("User has chosen not to install the PWA");
                    }
                    promptEvent = null;
                })
                    .catch(function (installError) {
                    // Boo. update the UI.
                    promptEvent = null;
                    root.classList.remove("available");
                    qcobjects_1.logger.warn(`Error during install:  ${installError.toString()}`);
                });
            }
            else {
                qcobjects_1.logger.debug("It is not possible to get the prompt event for install ");
            }
        }
    }
]);
