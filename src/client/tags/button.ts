import { Style } from "../../types/enums/style";
import { escaped, stringfyStyle } from "../../util/stringUtil";

export function button(onclick: string, text: string, style?: Style): string {
  const styleStr = stringfyStyle(style);
  const tag = "button";
  const txt = escaped(text);
  if (!styleStr) {
    return `<${tag} onclick="${onclick}">${txt}</${tag}>`;
  }
  return `<${tag} style="${styleStr}" onclick="${onclick}">${txt}</${tag}>`;
}
