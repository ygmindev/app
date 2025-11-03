import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type EntityResourceModel = ResourceModel & {
  created?: Date;

  isFixture?: boolean;

  beforeCreate?(): Promise<void>;
};
