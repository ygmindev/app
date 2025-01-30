import { type WebConfigModel } from '@lib/config/node/web/web.models';

export type _BuildAppParamsModel = {
  web: WebConfigModel;
};

export type _BuildAppModel = Promise<void>;
