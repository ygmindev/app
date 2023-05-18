import { _WebConfigModel } from '@lib/config/framework/web/_web.models';
import { ReturnTypeModel } from '@lib/shared/core/core.models';

export interface _ServerParamsModel {
  port: string;
  root?: string;
  config: ReturnTypeModel<_WebConfigModel>;
}

export type _ServerModel = void;
