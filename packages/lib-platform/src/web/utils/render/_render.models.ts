import { type RootContextModel } from '#lib-frontend/root/root.models';

export type _RenderParamsModel = {
  context?: RootContextModel;
};

export type _RenderModel = {
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
};
