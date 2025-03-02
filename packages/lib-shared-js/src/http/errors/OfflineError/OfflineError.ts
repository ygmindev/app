import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class OfflineError extends HttpError {
  constructor() {
    super(HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT, 'offline');
  }
}
