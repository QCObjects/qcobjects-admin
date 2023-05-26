import { Controller, ControllerParams, Package } from "qcobjects";
import "xterm/css/xterm.css";
import { Terminal } from "xterm";

const typewriter = (term:Terminal,line:string) => {
    // eslint-disable-next-line array-callback-return
    [...line].map ((l:string,index:number) => {
        setTimeout(()=> {
            term.write(l);

        },30*(index+1));
    });
};

class XTermController extends Controller {
    dependencies = [];
    term:Terminal;

    constructor(controller:ControllerParams) {
        super(controller);
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

        const term:Terminal = new Terminal({
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

        term.open(terminalElement as HTMLElement);
        term.write("\r\n$ ");
        this.term = term;

    }

}

Package("external.components", [
    XTermController
]);

export {XTermController, typewriter};