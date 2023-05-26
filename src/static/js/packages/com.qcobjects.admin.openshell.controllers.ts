import { ControllerParams, Package, Service, logger, serviceLoader } from "qcobjects";
import {XTermController, typewriter} from "./external.components";
import { NotificationComponent } from "qcobjects-sdk";
import { Terminal } from "xterm";

class OpenShellController extends XTermController {
    command = "";
    commands = {};

    constructor(controller:ControllerParams){
        super(controller);
        let isWebglEnabled = false;
        try {
          const webgl = new (window as any).WebglAddon.WebglAddon();
          this.term.loadAddon(webgl);
          isWebglEnabled = true;
        } catch (e) {
          console.warn("WebGL addon threw an exception during load", e);
        }
        this.commands = {
            help: {
              f: () => {
                this.term.writeln([
                  "Welcome to OpenShell! Try some of the commands below.",
                  "",
                  ...Object.keys(this.commands).map(e => `  ${e.padEnd(10)} ${(this.commands as any)[e].description}`)
                ].join("\n\r"));
                this.prompt(this.term);
              },
              description: "Prints this help message",
            },
            rm: {
              f: () => {
                this.term.writeln(["rm is not allowed."].join("\r\n"));
                this.addPrompt(this.term);
              },
              description: "rm is not allowed"
            },
            cd: {
              f: () => {
                this.term.writeln(["cd is not allowed."].join("\r\n"));
                this.addPrompt(this.term);
              },
              description: "cd is not allowed"
            },
            reboot: {
              f: () => {
                this.term.writeln(["reboot is not allowed."].join("\r\n"));
                this.addPrompt(this.term);
              },
              description: "reboot is not allowed"
            }

          };
        
        const lines = [
"OpenShell\r\n ",
"Please write a command:\r\n ",
"\r\n$ "
        ];

        // eslint-disable-next-line array-callback-return
        lines.map ((c:string, index:number) => {
            setTimeout(()=> {
                typewriter(this.term,c);
            }, 1500*(index+1));
        });

        this.term.onData(e => {
            switch (e) {
              case "\u0003": // Ctrl+C
                this.term.write("^C");
                this.prompt(this.term);
                break;
              case "\r": // Enter
                this.runCommand(this.term, this.command);
                this.command = "";
                break;
              case "\u007F": // Backspace (DEL)
                // Do not delete the prompt
                if ((this.term as any)._core.buffer.x > 2) {
                  this.term.write("\b \b");
                  if (this.command.length > 0) {
                    this.command = this.command.substr(0, this.command.length - 1);
                  }
                }
                break;
              default: // Print all other characters for demo
                if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= "\u00a0") {
                  this.command += e;
                  this.term.write(e);
                }
            }
          });        


    }

    runCommand(term: Terminal, text: string) {
        const command = text.trim().split(" ")[0];
        if (command.length > 0) {
          term.writeln("");
          if (command in this.commands) {
            (this.commands as any)[command].f();
          } else {
            this.executeCmd(text);
          }
        }
        this.prompt(term);
    }

    prompt(term:Terminal) {
        this.command = "";
        term.write("\r\n$ ");
    }

    addPrompt(term:Terminal) {
        term.write("\r\n$ ");
    }

    executeCmd (cmd:string) {
        const service = new Service ();
        service.url = "/admin/api/cmdshell";
        service.method = "POST";
        service.done = () => logger.debug("Command OK.");
        service.data = {cmd};
        serviceLoader(service, false)
            .then(({service}) => {
                const response = JSON.parse(service.template);
                const responseLines = response.message.split("\n");

                // eslint-disable-next-line array-callback-return
                responseLines.map ((c:string, index:number) => {
                    setTimeout(()=> {
                        typewriter(this.term,`${c}`);
                        this.term.writeln("");
                    }, 800*(index+1));
                });

            })
            .catch(e=>{
                logger.warn(e.message);
                NotificationComponent.danger(`It was not possible to execute: ${cmd}.`);
            });

    }

}
Package("com.qcobjects.admin.openshell.controllers", [
    OpenShellController
]);