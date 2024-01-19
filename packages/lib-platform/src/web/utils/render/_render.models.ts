import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type PartialDeepModel } from '@lib/shared/core/core.models';

export type _RenderParamsModel = {
  context?: PartialDeepModel<RootContextModel>;
};

export type _RenderModel = {
  error?: Error;
  redirectTo?: string;
  response?: {
    headers: Array<[string, string]>;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
};
