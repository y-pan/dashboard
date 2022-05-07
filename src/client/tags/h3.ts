import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function h3(text: string, style?: Style): string {
  return wrap("h3", text, style);
}
