import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";

export async function getGitBranches(isOtherOnly = false): Promise<RunResult> {
  const script = `scripts/gitBranches.sh ${isOtherOnly ? "other" : ""}`;
  Log.log(`Running script: ${script}`);
  return await runAsync(
    path.join(__dirname, script)
  );
}
