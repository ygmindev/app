import {
  type _WaitOnModel,
  type _WaitOnParamsModel,
} from '@tool/task/core/utils/waitOn/_waitOn.models';
import { type WAIT_ON_RESOURCE_TYPE } from '@tool/task/core/utils/waitOn/waitOn.constants';

export type WaitOnParamsModel = _WaitOnParamsModel[0];

export type WaitOnModel = _WaitOnModel;

export type WaitOnResourceTypeModel = `${WAIT_ON_RESOURCE_TYPE}`;
