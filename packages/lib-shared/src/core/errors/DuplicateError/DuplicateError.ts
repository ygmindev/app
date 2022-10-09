import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_ERROR_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';

export class DuplicateError extends HttpError {
  constructor(message?: string) {
    super(HTTP_ERROR_STATUS_CODE.BAD_REQUEST, message);
  }
}
