export class EnvironmentVariableError extends Error {
  constructor(value: string) {
    super(`environment variable not set: ${value}`);
  }
}
