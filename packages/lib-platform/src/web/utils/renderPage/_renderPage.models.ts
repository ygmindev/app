import { type ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _RenderPageParamsModel = ExportRenderServerRenderParamsModel;

export type _RenderPageModel = {
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
};
