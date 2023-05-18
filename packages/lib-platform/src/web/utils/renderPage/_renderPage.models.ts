import type { ExportRenderServerParamsModel } from 'packages/lib-platform/src/web/exports/exportRendererServer/exportRendererServer.models';

export interface _RenderPageParamsModel extends ExportRenderServerParamsModel {}

export interface _RenderPageModel {
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
}
