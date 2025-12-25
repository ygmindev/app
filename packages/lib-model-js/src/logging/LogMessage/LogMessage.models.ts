import { type LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type LogMessageModel = ResourceModel & {
  created?: Date;

  level?: number;

  message?: string;

  ns?: string;

  process?: string;

  type?: LOG_MESSAGE_TYPE;
};
