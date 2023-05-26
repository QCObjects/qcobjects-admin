"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
(0, qcobjects_1.Package)("org.quickcorp.custom.models", [
    class ContactVO extends qcobjects_1.VO {
        constructor() {
            super(...arguments);
            this.first_name = "";
            this.last_name = "";
            this.address = "";
            this.postalCode = "";
            this.city = "";
            this.country = "";
            this.email = "";
            this.phone = "";
        }
    }
]);
