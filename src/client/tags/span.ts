import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function span(text: string, style?: Style): string {
  return wrap("span", text, style);
}
