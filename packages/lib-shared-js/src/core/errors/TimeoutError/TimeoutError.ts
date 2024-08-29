export class TimeoutError extends Error {
  constructor(message: string, timeout: number = 0) {
    super(`${message} timedout after ${timeout} seconds`);
  }
}
