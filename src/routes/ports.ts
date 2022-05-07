import { Header } from "../client/components/Header";
import { Ports } from "../client/components/Ports";
import { Log } from "../util/log";

export async function respondAllPorts(req: any, res: any, next: any) {
  Log.log("Responding all ports...");
  res.write(Header());
  res.write(await Ports({ isDownOnly: false }));
  res.end();
}

export async function respondDownPorts(req: any, res: any, next: any) {
  Log.log("Responding down ports...");
  res.write(Header());
  res.write(await Ports({ isDownOnly: true }));
  res.end();
}
