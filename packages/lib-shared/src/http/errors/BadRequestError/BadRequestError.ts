import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';

export class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(HTTP_STATUS_CODE.BAD_REQUEST, message);
  }
}
