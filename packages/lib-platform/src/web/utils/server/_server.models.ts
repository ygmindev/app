import { _WebConfigModel } from '@lib/config/platform/web/web.models';
import { ReturnTypeModel } from '@lib/shared/core/core.models';

export interface _ServerParamsModel {
  port: string;
  root?: string;
  config: ReturnTypeModel<_WebConfigModel>;
}

export type _ServerModel = void;
