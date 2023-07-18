import { runAsync, RunResult } from "./run";
const config = require("../config.json");

export async function getPorts(isDownOnly = false): Promise<RunResult> {
  const result: RunResult = { stderr: "", stdout: "" };

  let i = 0;
  for (let { name, port, group = "", note = "" } of config.portItems) {
    if (port == undefined) {
      // treat it as a separator to render a empty line
      result.stdout +=
        "= == === ===== ======= ============ =================== ===============================\n";
      continue;
    }
    i++;
    const { stderr, stdout } = await runAsync(`lsof -ti:${port}`);

    const isPortUp = !!stdout;

    if (isDownOnly && isPortUp) {
      continue;
    }

    if (isPortUp) {
      const out = String(stdout).replace(/\n/g, " ").trim();
      result.stdout += `${i}\t[${group}]\t[  up  ]\t${name} -> ${port}\tPid=${out}\n`;
      // command to kill port
      result.stdout += `\t\t\t\tkill $(lsof -ti:${port})\n`;
    } else {
      result.stdout += `${i}\t[${group}]\t[ down ]\t${name} -> ${port}\n`;
    }

    if (note) {
      result.stdout += `${note}\n`;
    }
  }

  return result;
}
