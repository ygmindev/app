export class ExternalError extends Error {
  constructor(value: string) {
    super(`external: ${value}`);
  }
}
