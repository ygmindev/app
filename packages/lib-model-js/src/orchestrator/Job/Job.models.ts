import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type JobModel<TParams extends unknown = unknown> = EntityResourceModel & {
  workflow: string;
};
