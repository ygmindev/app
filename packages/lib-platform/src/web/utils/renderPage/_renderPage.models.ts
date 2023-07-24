import { type RenderServerRenderParamsModel } from '#lib-platform/web/exports/renderServer/renderServer.models';

export type _RenderPageParamsModel = RenderServerRenderParamsModel;

export type _RenderPageModel = {
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
};
