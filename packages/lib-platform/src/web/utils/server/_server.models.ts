import type { _WebConfigModel } from '@lib/config/platform/web/web.models';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';

export interface _ServerParamsModel {
  config: ReturnTypeModel<_WebConfigModel>;
  port: string;
  root?: string;
}

export type _ServerModel = void;
