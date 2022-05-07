import { Style } from "../../types/enums/style";
import { escaped, stringfyStyle } from "../../util/stringUtil";

export function wrap(
  tag: string = "pre",
  text: string,
  style?: Style,
): string {
  const styleStr = stringfyStyle(style);
  if (!styleStr) {
    return `<${tag}>${escaped(text)}</${tag}>`;
  }
  return `<${tag} style="${styleStr}">${escaped(text)}</${tag}>`;
}
