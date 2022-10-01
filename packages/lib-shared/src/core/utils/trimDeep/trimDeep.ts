export const trimDeep = (value: string): string =>
  value.replace(/(?:\n(?:\s*))+|\s\s+/g, ' ').trim();
