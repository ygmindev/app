export class UninitializedError extends Error {
  constructor(value: string) {
    super(`not initialized: ${value}`);
  }
}
