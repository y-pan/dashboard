import { Style } from "../../types/enums/style";
import { escaped, stringfyStyle } from "../../util/stringUtil";

export function a(text: string, href: string, style?: Style): string {
  const tag = "a";
  const styleStr = stringfyStyle(style);
  if (!styleStr) {
    return `<${tag} href=${href}>${escaped(text)}</${tag}>`;
  }
  return `<${tag} href=${href} style="${styleStr}">${escaped(text)}</${tag}>`;
}
