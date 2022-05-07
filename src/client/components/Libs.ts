import { getLibs } from "../../io/libs";
import { h1, pre } from "../tags";
import { Header } from "./Header";

interface Props {
  withHeader?: boolean;
}

export async function LibsComp(props: Props = {}): Promise<string> {
  const { withHeader } = props;
  const { stdout, stderr } = await getLibs();
  return [
    withHeader ? Header() : "",
    h1("Libs"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}
