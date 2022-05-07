import { Style } from "../../types/enums/style";
import { wrap } from "./wrap";

export function h1(text: string, style?: Style): string {
  return wrap("h1", text, style);
}
