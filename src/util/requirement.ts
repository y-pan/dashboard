export function requireNonNull(val: any, msg?: string): void {
  if (val == null) {
    throw new Error(msg || "Value is required to be non-null");
  }
}

export function requireStringNotBlank(val: string | any, msg?: string): void {
  if (typeof val !== "string" || !val.trim()) {
    throw new Error(msg || `Value is required to be a string, and not blank: ${val}`)
  }
}

export function requireNumberPositive(val: number | any, msg?: string ): void {
  if (typeof val !== "number" || !Number.isFinite(val) || val <= 0) {
    throw new Error(msg || `Value is required to be a finite positive number: ${val}`)
  }
}

export function requireArrayNotEmpty(array: any[] | any, msg?: string): void {
  if (!array || !Array.isArray(array) || array.length == 0) {
    throw new Error(msg || `Value is required to be an array, and not empty: ${array}`);
  }
}

