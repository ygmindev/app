import { config as taskConfig } from '@lib/config/task/task';
import { _waitOn } from '@tool/task/core/utils/waitOn/_waitOn';
import {
  type WaitOnModel,
  type WaitOnParamsModel,
} from '@tool/task/core/utils/waitOn/waitOn.models';

export const waitOn = async (params: WaitOnParamsModel): Promise<WaitOnModel> =>
  _waitOn(params, taskConfig.params().wait);
