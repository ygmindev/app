import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode?: number, message?: string, stack?: string) {
    super(message ?? 'HttpError');
    this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    Error.captureStackTrace(this, HttpError);
    // Object.setPrototypeOf(this, HttpError.prototype);
    // this.stack = stack;
  }
}
