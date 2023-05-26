import { Controller, ControllerParams } from "qcobjects";
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
declare const typewriter: (term: Terminal, line: string) => void;
declare class XTermController extends Controller {
    dependencies: never[];
    term: Terminal;
    constructor(controller: ControllerParams);
}
export { XTermController, typewriter };
