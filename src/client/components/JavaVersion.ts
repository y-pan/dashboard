import { getJavaVersion } from "../../io/javaVersion";
import { h1, pre } from "../tags";
import { Header } from "./Header";

interface Props {
  withHeader?: boolean;
}

export async function JavaVersionComp(props: Props = {}): Promise<string> {
  const { withHeader } = props;
  const { stdout, stderr } = await getJavaVersion();
  return [
    withHeader ? Header() : "",
    h1("Java Version"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}
