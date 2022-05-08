import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";
import { libsDir, targetLibs } from "../config.json";

export async function getLibs(): Promise<RunResult> {
  const script = `scripts/libsFromPom.sh ${libsDir} ${targetLibs}`;
  Log.log(`Running script: ${script}`);
  return runAsync(path.join(__dirname, script));
}
