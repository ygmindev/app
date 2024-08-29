export class InvalidTypeError extends Error {
  constructor(actual: unknown, expected: unknown) {
    super(`input type: ${typeof actual} (actual) vs ${expected as string} (expected)`);
  }
}
