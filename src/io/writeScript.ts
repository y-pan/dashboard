import { runAsync, RunResult } from "./run";
import path = require("path");
import { Log } from "../util/log";
import { writeFile, chmod } from "fs/promises";

interface Props {
  fileName: string;
  fileContent: string[];
}

export async function writeScript({
  fileName,
  fileContent,
}: Props): Promise<RunResult> {
  try {
    Log.log(`Writing script: ${fileName}`, fileContent);
    const filePath = path.join(__dirname, "scripts", fileName);
    await writeFile(filePath, fileContent.join("\n"));
    await chmod(filePath, 0o755);
    return { stdout: "success", stderr: "" };
  } catch (e) {
    return { stdout: "", stderr: `${e}` };
  }
}
