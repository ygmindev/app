import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode?: number, message?: string) {
    super();
    Object.setPrototypeOf(this, HttpError.prototype);
    this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    this.message = message ?? 'HttpError';
  }
}
