"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
(0, qcobjects_1.Package)("org.quickcorp.custom.views", [
    class CardView extends qcobjects_1.View {
        done(...args) {
            const _ret_ = super.done(args);
            const component = this.component;
            if (component !== undefined && component.body !== undefined) {
                component.body.style.display = "block";
                component.body.style.width = "100px";
                component.body.style.height = "100px";
            }
            return _ret_;
        }
    }
]);
