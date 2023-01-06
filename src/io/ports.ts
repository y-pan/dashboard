import { runAsync, RunResult } from "./run";
const config = require("../config.json");

export async function getPorts(isDownOnly = false): Promise<RunResult> {
  const result: RunResult = { stderr: "", stdout: "" };

  let i = 0;
  for (let { name, port, group = "" } of config.portItems) {
    if (port == undefined) {
      // treat it as a separator to render a empty line
      result.stdout += "\n";
      continue;
    }
    const { stderr, stdout } = await runAsync(`lsof -ti:${port}`);

    if (stdout) {
      // the port is active
      if (!isDownOnly) {
        result.stdout += `${
          i + 1
        }\t[${group}]\t[  up  ]\t${name} -> ${port}\tPid=${String(stdout)
          .replace(/\n/g, " ")
          .trim()}\n`;
      }
    } else {
      // the port is inactive
      result.stdout += `${i + 1}\t[${group}]\t[ down ]\t${name} -> ${port}\n`;
    }
    i++;
  }

  return result;
}
