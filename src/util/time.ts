export function nowEst(): string {
  return toStringEst(new Date());
}

export function toStringEst(date: Date, showTimeZone = true): string {
  if (!date || !(date instanceof Date)) {
    return "";
  }

  const str = date.toLocaleString([], {
    timeZone: "Canada/Eastern",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return showTimeZone ? `${str} (EST)` : str;
}
