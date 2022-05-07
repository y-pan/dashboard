import { runAsync, RunResult } from "./run";
const config = require("../config.json");

export async function getPorts(isDownOnly = false): Promise<RunResult> {
  
  if (!config?.portItems) {
    return {
      stderr: `portItems not defined in config.json. Declear like {portItems: [{name: "my-app-1", port: 8080}, {name: "my-app-2", port: 9000}]}`,
      stdout: "",
    };
  }

  const result: RunResult = { stderr: "", stdout: "" };

  for (let { name, port } of config.portItems) {
    const { stderr, stdout } = await runAsync(`lsof -ti:${port}`);

    if (stdout) {
      // the port is in use
      if (!isDownOnly) {
        result.stdout += `[  up  ]    ${name} -> ${port} | pid=${String(stdout).trim()}\n`;
      }
    } else {
      // the port is not in use
      result.stdout += `[ down ]    ${name} -> ${port}\n`;
    }
  }

  return result;
}
