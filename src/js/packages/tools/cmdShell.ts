import { CONFIG, logger } from "qcobjects";

/* eslint-disable @typescript-eslint/no-var-requires */
type CMDData = {
    cmd: string;
};

const execCmdShell = (data: CMDData):Promise<string> => {
    return new Promise((resolve, reject) => {
        const { exec } = require("child_process");
        const process = require("process");
        const path = require("path");

        if (CONFIG.get("enableShellCommands", false)) {
            const projectPath = CONFIG.get("projectPath", `${process.cwd()}`);
            process.chdir(path.resolve(`${process.cwd()}`, `${projectPath}`));
            logger.info(`Executing a command in: ${process.cwd()}`);
            logger.info(`Executing command: ${data.cmd}`);
            exec(`${data?.cmd}`, (err: any, stdout: string, stderr: string) => {
                if (err) {
                    const error = new Error();
                    error.message = err.message;
                    reject(error);
                }
                if (stdout) {
                    logger.debug(stdout);
                    resolve(stdout);
                }
                if (stderr) {
                    logger.warn(stderr);
                }
            }).stdout.on("data", function (data: any) {
                console.log(data);
            });
        } else {
            const error = new Error();
            error.message = "To use this service, shell commands must be enabled: CONFIG.set(\"enableShellCommands\", true)";
            reject(error);
        }


    });
};

export {
    CMDData,
    execCmdShell
};
