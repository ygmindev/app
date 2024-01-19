import { config } from '@lib/config/core/task/task';
import { _waitOn } from '@tool/task/core/utils/waitOn/_waitOn';
import {
  type WaitOnModel,
  type WaitOnParamsModel,
} from '@tool/task/core/utils/waitOn/waitOn.models';

export const waitOn = async (params: WaitOnParamsModel): Promise<WaitOnModel> =>
  _waitOn(params, config.wait);
