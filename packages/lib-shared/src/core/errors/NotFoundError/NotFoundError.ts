export class NotFoundError extends Error {
  constructor(value: string) {
    super(`not found: ${value}`);
  }
}
