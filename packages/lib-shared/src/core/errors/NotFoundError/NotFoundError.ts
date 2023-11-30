export class NotFoundError extends Error {
  constructor(message?: string) {
    super(`not found: ${message}`);
  }
}
