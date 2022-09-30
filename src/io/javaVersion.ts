import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";
import { libsDir } from "../config.json";

export async function getJavaVersion(): Promise<RunResult> {
  const script = `scripts/javaVersionFromPom.sh ${libsDir}`;
  Log.log(`Running script for javaVersion: ${script}`);
  return runAsync(path.join(__dirname, script));
}
