import { getPorts } from "../../io/ports";
import { h1, pre } from "../tags";
import { Header } from "./Header";

interface Props {
  withHeader?: boolean;
  isDownOnly?: boolean;
}

export async function Ports(props: Props = {}): Promise<string> {
  const { isDownOnly, withHeader } = props;

  const { stderr, stdout } = await getPorts(isDownOnly);
  return [
    withHeader ? Header() : "",
    h1(isDownOnly ? "Ports Down" : "Ports"),
    pre(stdout),
    pre(stderr, { color: "red" }),
  ]
    .filter(Boolean)
    .join("");
}
