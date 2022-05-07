import { Log } from "../util/log";
import { GitBranchesComp } from "../client/components/GitBranches";
import { Header } from "../client/components/Header";

export async function respondBranchesAll(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding BranchesAllPage...");
  res.write(Header());
  res.write(await GitBranchesComp({ isOtherOnly: false }));
  res.end();
}

export async function respondBranchesOther(
  req: any,
  res: any,
  next: any
): Promise<void> {
  Log.log("Responding BranchesAllPage...");
  res.write(Header());
  res.write(await GitBranchesComp({ isOtherOnly: true }));
  res.end();
}
