import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export interface _RenderPageParamsModel extends ExportRenderServerRenderParamsModel {}

export type _RenderPageModel = Promise<{
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
}>;
