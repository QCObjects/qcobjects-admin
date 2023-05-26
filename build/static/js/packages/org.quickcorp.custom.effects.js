"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
(0, qcobjects_1.Package)("org.quickcorp.custom.effects", [
    class MainTransitionEffect extends qcobjects_1.TransitionEffect {
        constructor() {
            super(...arguments);
            this.duration = 780;
            this.defaultParams = {
                alphaFrom: 0,
                alphaTo: 1
            };
            this.effects = ["Fade", "MoveYInFromBottom"];
            this.fitToHeight = true;
        }
    },
    class SlideLeftTransitionEffect extends qcobjects_1.TransitionEffect {
        constructor() {
            super(...arguments);
            this.duration = 450;
            this.effects = ["Fade", "MoveXInFromLeft"];
            this.fitToWidth = true;
        }
    },
    class SlideRightTransitionEffect extends qcobjects_1.TransitionEffect {
        constructor() {
            super(...arguments);
            this.duration = 450;
            this.effects = ["Fade", "MoveXInFromRight"];
            this.fitToWidth = true;
        }
    }
]);
