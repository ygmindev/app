import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message ?? 'unauthorized');
  }
}
