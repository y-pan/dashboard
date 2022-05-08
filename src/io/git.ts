import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";
import {gitBranchDir} from "../config.json";

export async function getGitBranches(isOtherOnly = false): Promise<RunResult> {
  const script = `scripts/gitBranches.sh ${gitBranchDir} ${isOtherOnly ? "other" : ""}`;
  Log.log(`Running script: ${script}`);
  return await runAsync(
    path.join(__dirname, script)
  );
}
