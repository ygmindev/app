import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';

export type _RenderParamsModel = {
  context?: PartialDeepModel<RootContextModel>;
  headers?: Array<[string, string]>;
};

export type _RenderModel = {
  error?: HttpError;
  headers: Array<[string, string]>;
  pipeStream(writable: WritableStream): void;
  redirectTo?: string;
  statusCode: number;
  stream: ReadableStream;
};
