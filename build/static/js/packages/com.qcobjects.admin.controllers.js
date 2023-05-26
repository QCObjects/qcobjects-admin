"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
const qcobjects_sdk_1 = require("qcobjects-sdk");
(0, qcobjects_1.Package)("com.qcobjects.admin.controllers", [
    class SVGCodeAnimationController extends qcobjects_1.Controller {
        constructor() {
            super(...arguments);
            this.dependencies = [];
            this.elements = [];
            this.effectsConfig = {
                duration: 770,
                interval: 1000
            };
            this.timeloop = null;
        }
        animateElements() {
            this.elements.sort().map((e) => {
                e.style.opacity = "0";
                e.style.transform = "scaleX(0)";
                return e;
            })
                .map((e, index) => setTimeout(() => {
                const fade = new qcobjects_sdk_1.Fade();
                fade.duration = this.effectsConfig.duration;
                const wipeRight = new qcobjects_sdk_1.WipeRight();
                wipeRight.duration = this.effectsConfig.duration;
                fade.apply(e, 0, 1);
                wipeRight.apply(e, 0, 1);
            }, (index - 1) * this.effectsConfig.interval));
        }
        done() {
            if (Object.hasOwnProperty.call(this.component.data, "duration")) {
                this.effectsConfig.duration = this.component.data.duration;
                this.effectsConfig.interval = this.component.data.duration;
            }
            this.elements = this.component.body
                .subelements(this.component.data.code_element);
            this.animateElements();
            this.timeloop = setInterval(() => {
                this.animateElements();
            }, this.effectsConfig.interval * this.elements.length * 4);
        }
    }
]);
