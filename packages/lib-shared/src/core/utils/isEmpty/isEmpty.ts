export const isEmpty = (value: unknown): boolean =>
  value === '' || value === null || value === undefined || JSON.stringify(value) === '{}';
