import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';

export interface _ServerParamsModel extends Pick<WebConfigParamsModel, 'configFile'> {
  port: string;
  root: string;
}

export type _ServerModel = void;
