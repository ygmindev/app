import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';
import { type LOGGING_LEVEL } from '@lib/shared/logging/logging.constants';

export type LogMessageModel = ResourceModel & {
  created?: Date;

  level?: LOGGING_LEVEL;

  message: string;

  ns?: string;
};
