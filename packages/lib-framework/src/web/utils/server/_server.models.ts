import { _WebConfigModel } from '@lib/config/framework/web/_web.models';
import type { RunWithConfigParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export interface _ServerParamsModel extends Pick<RunWithConfigParamsModel<_WebConfigModel>, 'config'> {
  port: string;
  root: string;
}

export type _ServerModel = void;
