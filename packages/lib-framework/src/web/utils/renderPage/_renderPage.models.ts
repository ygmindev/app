import type { i18n } from 'i18next';

export interface _RenderPageParamsModel {
  locale?: { i18n: i18n; language: string };
  url: string;
}

export interface _RenderPageModel {
  error?: Error;
  redirect?: string;
  response?: {
    contentType: string;
    pipeStream(writable: NodeJS.WritableStream): void;
    statusCode: number;
  };
}
