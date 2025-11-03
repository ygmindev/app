import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type TaskModel = ResourceModel & {
  description?: string;

  name: string;
};
