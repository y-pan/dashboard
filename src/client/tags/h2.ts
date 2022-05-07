import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function h2(text: string, style?: Style): string {
  return wrap("h2", text, style);
}
