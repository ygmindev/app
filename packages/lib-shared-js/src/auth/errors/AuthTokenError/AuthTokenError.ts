import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class AuthTokenError extends HttpError {
  constructor(message?: string) {
    super(HTTP_STATUS_CODE.INVALID_TOKEN, message ?? 'invalid or expired token');
  }
}
