import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type WorkflowModel = ResourceModel & {
  name: string;
};
