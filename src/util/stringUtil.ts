import { Style } from "../types/enums/style";

export function stringfyStyle(style: Style): string {
  if (!style) {
    return "";
  }
  const styleArray = [];
  for (let [key, value] of Object.entries(style)) {
    if (key && value) {
      styleArray.push(`${keba(key)}:${value}`);
    }
  }
  return styleArray.join(";");
}

export function escaped(text: string): string {
  if (text == null) {
    return "";
  }

  return String(text).replace(/[<>]/g, "&gt;");
}

export function mapStringify(
  json: Record<string, string>,
  delim = ";"
): string {
  if (!json) {
    return "";
  }

  return Object.entries(json)
    .map((entry) => `${entry[0]}:${entry[1]}`)
    .join(delim);
}

export function keba(key: string): string {
  if (!key) {
    return "";
  }
  let kebaKey = "";
  for (let i = 0; i < key.length; i++) {
    if (isUpperCode(key.charCodeAt(i))) {
      kebaKey += `-${key[i].toLowerCase()}`;
    } else {
      kebaKey += key[i];
    }
  }
  return kebaKey;
}

export function isUpper(char: string): boolean {
  return isUpperCode(char.charCodeAt(0));
}

export function isUpperCode(charCode: number): boolean {
  return 65 <= charCode && charCode <= 90;
}

export function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
