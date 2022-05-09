import { runAsync, RunResult } from "./run";
const config = require("../config.json");


export async function getPorts(isDownOnly = false): Promise<RunResult> {
  const result: RunResult = { stderr: "", stdout: "" };

  for (let { name, port, group = "" } of config.portItems) {
    const { stderr, stdout } = await runAsync(`lsof -ti:${port}`);

    if (stdout) {
      // the port is in use
      if (!isDownOnly) {
        result.stdout += `[${group}]\t[  up  ]\t${name} -> ${port}\tPid=${String(stdout).replaceAll("\n", " ").trim()}\n`;
      }
    } else {
      // the port is not in use
      result.stdout +=   `[${group}]\t[ down ]\t${name} -> ${port}\n`;
    }
  }

  return result;
}
