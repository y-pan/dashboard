import { Style } from "../../types/enums/style";
import { escaped, stringfyStyle } from "../../util/stringUtil";

export function input(text: string, style?: Style): string {
  const styleStr = stringfyStyle(style);
  if (!styleStr) {
    return `<input value=${escaped(text)} value="${escaped(text)}" />`;
  }
  return `<input style="${styleStr}" value=${escaped(text)} />`;
}
