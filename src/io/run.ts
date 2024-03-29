import util = require("util");
import childProcess = require("child_process");
const execAsync = util.promisify(childProcess.exec);

export interface RunResult<T = string> {
  stdout: T;
  stderr: string;
}

export async function runAsync(
  commandOrScriptPath: string
): Promise<RunResult> {
  try {
    console.log("runAsync: ", commandOrScriptPath);
    const { stdout, stderr } = await execAsync(commandOrScriptPath);
    return { stdout, stderr };
  } catch (e) {
    return {
      stdout: "",
      stderr: `Unknown error when executing command: ${commandOrScriptPath}. Error was: ${e}`,
    };
  }
}
