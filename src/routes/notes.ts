import { Header } from "../client/components/Header";
import { Log } from "../util/log";
import {notes} from "../config.json";
import { div } from "../client/tags";

export async function respondNotes(req: any, res: any, next: any) {
  Log.log("Responding notes...");
  res.write(Header());

  const content = notes.map(line => div(line)).filter(Boolean).join("");
  res.write(content);
  res.end();
}
