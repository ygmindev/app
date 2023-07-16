import { type _WebConfigModel } from '#lib-config/platform/web/web.models';

export type _ServerParamsModel = {
  config: _WebConfigModel;
  port: string;
  root?: string;
};

export type _ServerModel = void;
