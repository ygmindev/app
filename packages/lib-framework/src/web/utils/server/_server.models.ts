import { _WebConfigModel } from '@lib/config/framework/web/_web.models';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';

export interface _ServerParamsModel extends Pick<RunWithConfigStringParamsModel, 'config'> {
  port: string;
  root?: string;
}

export type _ServerModel = void;
