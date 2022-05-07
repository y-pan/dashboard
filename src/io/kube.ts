import path = require("path");
import { Log } from "../util/log";
import { runAsync, RunResult } from "./run";

export async function getKubeImages(isDifOnly = false): Promise<RunResult> {
  const script = `scripts/kubeImages.sh ${isDifOnly ? "dif" : ""}`;
  Log.log(`Running script: ${script}`);
  return runAsync(
    path.join(__dirname, script)
  );
}

export async function getKubePods(isOffOnlly = false): Promise<RunResult> {
  const script = `scripts/kubePods.sh ${isOffOnlly ? "off" : ""}`;
  Log.log(`Running script: ${script}`);
  return runAsync(
    path.join(__dirname, script)
  );
}

export async function getKubeLog(
  namespace: string,
  serviceName: string
): Promise<RunResult> {
  const script = `scripts/kubeLog.sh ${namespace} ${serviceName}`;
  Log.log(`Running script: ${script}`)
  return runAsync(
    path.join(__dirname, script)
  );
}
