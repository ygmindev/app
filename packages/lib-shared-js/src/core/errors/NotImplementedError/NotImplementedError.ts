export class NotImplementedError extends Error {
  constructor(value: string) {
    super(`not implemented: ${value}`);
  }
}
