import { Header } from "../client/components/Header";
import { LibsComp } from "../client/components/Libs";
import { Log } from "../util/log";

export async function respondLibs(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding libs...");
  res.write(Header());
  res.write(await LibsComp({ withHeader: false }));
  res.end();
}
