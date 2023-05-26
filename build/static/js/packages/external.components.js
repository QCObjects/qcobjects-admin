"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typewriter = exports.XTermController = void 0;
const qcobjects_1 = require("qcobjects");
const xterm_1 = require("xterm");
const typewriter = (term, line) => {
    // eslint-disable-next-line array-callback-return
    [...line].map((l, index) => {
        setTimeout(() => {
            term.write(l);
        }, 30 * (index + 1));
    });
};
exports.typewriter = typewriter;
class XTermController extends qcobjects_1.Controller {
    constructor(controller) {
        super(controller);
        this.dependencies = [];
        const baseTheme = {
            foreground: "#F8F8F8",
            background: "#2D2E2C",
            selection: "#5DA5D533",
            black: "#1E1E1D",
            brightBlack: "#262625",
            red: "#CE5C5C",
            brightRed: "#FF7272",
            green: "#5BCC5B",
            brightGreen: "#72FF72",
            yellow: "#CCCC5B",
            brightYellow: "#FFFF72",
            blue: "#5D5DD3",
            brightBlue: "#7279FF",
            magenta: "#BC5ED1",
            brightMagenta: "#E572FF",
            cyan: "#5DA5D5",
            brightCyan: "#72F0FF",
            white: "#F8F8F8",
            brightWhite: "#FFFFFF"
        };
        const term = new xterm_1.Terminal({
            fontFamily: "\"Cascadia Code\", Menlo, monospace",
            theme: baseTheme,
            cursorBlink: true,
            allowProposedApi: true
        });
        const terminalElement = this.component.shadowRoot?.subelements("#terminal").pop();
        // Cancel wheel events from scrolling the page if the terminal has scrollback
        terminalElement?.addEventListener("wheel", e => {
            if (term.buffer.active.baseY > 0) {
                e.preventDefault();
            }
        });
        term.open(terminalElement);
        term.write("\r\n$ ");
        this.term = term;
    }
}
exports.XTermController = XTermController;
(0, qcobjects_1.Package)("external.components", [
    XTermController
]);
