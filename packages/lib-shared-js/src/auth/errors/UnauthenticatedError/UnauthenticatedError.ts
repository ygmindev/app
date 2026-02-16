import {
  type UnauthenticatedErrorModel,
  type UnauthenticatedErrorParamsModel,
} from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class UnauthenticatedError extends HttpError implements UnauthenticatedErrorModel {
  constructor(message?: UnauthenticatedErrorParamsModel) {
    super(HTTP_STATUS_CODE.UNAUTHORIZED, message);
  }
}
