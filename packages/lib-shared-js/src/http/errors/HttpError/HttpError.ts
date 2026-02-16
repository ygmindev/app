import {
  type HttpErrorModel,
  type HttpErrorParamsModel,
} from '@lib/shared/http/errors/HttpError/HttpError.models';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export class HttpError extends Error implements HttpErrorModel {
  statusCode: number;

  constructor(...[statusCode, message]: HttpErrorParamsModel) {
    super(message ?? 'HttpError');
    this.statusCode = statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
    Error.captureStackTrace(this, HttpError);
  }
}
