import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type LogMessageModel = ResourceModel & {
  created?: Date;

  level?: number;

  message?: string;

  ns?: string;
};
