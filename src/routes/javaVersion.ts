import { Header } from "../client/components/Header";
import { JavaVersionComp } from "../client/components/JavaVersion";
import { Log } from "../util/log";

export async function respondJavaVersion(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding JavaVersion...");
  res.write(Header());
  res.write(await JavaVersionComp({ withHeader: false }));
  res.end();
}
