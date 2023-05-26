type CMDData = {
    cmd: string;
};
declare const execCmdShell: (data: CMDData) => Promise<string>;
export { CMDData, execCmdShell };
