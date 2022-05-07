import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function div(text: string, style?: Style): string {
  return wrap("div", text, style);
}
