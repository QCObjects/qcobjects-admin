"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execCmdShell = void 0;
const qcobjects_1 = require("qcobjects");
const execCmdShell = (data) => {
    return new Promise((resolve, reject) => {
        const { exec } = require("child_process");
        const process = require("process");
        const path = require("path");
        if (qcobjects_1.CONFIG.get("enableShellCommands", false)) {
            const projectPath = qcobjects_1.CONFIG.get("projectPath", `${process.cwd()}`);
            process.chdir(path.resolve(`${process.cwd()}`, `${projectPath}`));
            qcobjects_1.logger.info(`Executing a command in: ${process.cwd()}`);
            qcobjects_1.logger.info(`Executing command: ${data.cmd}`);
            exec(`${data?.cmd}`, (err, stdout, stderr) => {
                if (err) {
                    const error = new Error();
                    error.message = err.message;
                    reject(error);
                }
                if (stdout) {
                    qcobjects_1.logger.debug(stdout);
                    resolve(stdout);
                }
                if (stderr) {
                    qcobjects_1.logger.warn(stderr);
                }
            }).stdout.on("data", function (data) {
                console.log(data);
            });
        }
        else {
            const error = new Error();
            error.message = "To use this service, shell commands must be enabled: CONFIG.set(\"enableShellCommands\", true)";
            reject(error);
        }
    });
};
exports.execCmdShell = execCmdShell;
