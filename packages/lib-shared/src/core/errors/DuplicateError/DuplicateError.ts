export class DuplicateError extends Error {
  constructor(value: string) {
    super(`duplicate: ${value}`);
  }
}
