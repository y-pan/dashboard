import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function pre(text: string, style?: Style): string {
  return wrap("pre", text, style);
}
