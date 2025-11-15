import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type JobModel = ResourceModel & {
  workflow: string;
};
