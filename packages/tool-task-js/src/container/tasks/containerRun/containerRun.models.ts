import { type PLATFORM } from '@lib/shared/platform/platform.constants';
import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type ContainerRunParamsModel = AppTaskParamsModel & {
  platform: PLATFORM;
};

export type ContainerRunModel = {};
