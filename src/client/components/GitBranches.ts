import { getGitBranches } from "../../io/git";
import { h1, pre } from "../tags";
import { Header } from "./Header";

interface Props {
  withHeader?: boolean;
  isOtherOnly?: boolean;
}

export async function GitBranchesComp(props: Props = {}): Promise<string> {
  const { withHeader, isOtherOnly } = props;
  const { stderr, stdout } = await getGitBranches(isOtherOnly);
  return [
    withHeader ? Header() : "",
    h1(isOtherOnly ? "Branches Non-Default only" : "Branches"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}
