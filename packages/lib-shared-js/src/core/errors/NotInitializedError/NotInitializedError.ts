export class NotInitializedError extends Error {
  constructor(message?: string) {
    super(`not initialized: ${message}`);
  }
}
