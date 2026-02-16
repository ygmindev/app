import {
  type UnauthorizedErrorModel,
  type UnauthorizedErrorParamsModel,
} from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class UnauthorizedError extends HttpError implements UnauthorizedErrorModel {
  constructor(message?: UnauthorizedErrorParamsModel) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message ?? 'unauthorized');
  }
}
