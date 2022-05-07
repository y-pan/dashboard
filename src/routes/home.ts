import { Log } from "../util/log";
import Home from "../client/components/Home";
import { Header } from "../client/components/Header";

export async function respondHome(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding Home...");
  res.write(Header());
  res.write(await Home());
  res.end();
}
