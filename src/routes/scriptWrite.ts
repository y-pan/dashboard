import { Header } from "../client/components/Header";
import { writeScript } from "../io/writeScript";
import { Log } from "../util/log";

export async function respondScriptWrite(
  req: any, res: any, next: any
): Promise<void> {
  Log.log("Responding ScriptWrite...");
  res.write(Header());
  const {stderr, stdout} = await writeScript({fileName: "test.sh", fileContent: ["pwd", "echo 'hello world'", "ls -al"]});
  res.write(stdout);
  res.write(stderr);
  res.end();
}
