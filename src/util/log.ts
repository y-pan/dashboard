export type Exception = Error | any;

function join(message: string, exception: Exception): string {
  const exceptionSafe = exception ? String(exception) : "";
  const messageSafe = message == null ? "" : String(message);
  if (!messageSafe && !exceptionSafe) {
    return "";
  }
  if (!exceptionSafe) {
    return messageSafe;
  }
  return `${messageSafe} - ${exceptionSafe}`;
}

export class Log {
  static log(message: string, exception?: Exception): void {
    const msg = join(message, exception);
    msg && console.log(msg);
  }

  static warn(message: string, exception?: Exception): void {
    const msg = join(message, exception);
    msg && console.warn(msg);
  }

  static error(message: string, exception?: Exception): void {
    const msg = join(message, exception);
    msg && console.error(msg);
  }
}
