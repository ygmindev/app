import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';

export interface _ServerParamsModel extends Pick<_WebConfigParamsModel, 'configFile'> {
  port: string;
  root: string;
}

export type _ServerModel = void;
