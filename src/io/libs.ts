import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";
const config = require("../config.json");

export async function getLibs(): Promise<RunResult> {
  if (!config.targetLibs) {
    return {
      stdout: "",
      stderr: `targetLibs is missing in config.json. Declear like { "targetLibs": "target-lib1 target-lib2" }`,
    };
  }
  const script = `scripts/libsFromPom.sh ${config.targetLibs}`;
  Log.log(`Running script: ${script}`);
  return runAsync(path.join(__dirname, script));
}
