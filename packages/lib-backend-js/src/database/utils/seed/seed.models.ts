import {
  type RESOURCE_METHOD_TYPE,
  type ResourceNameParamsModel,
} from '@lib/shared/resource/resource.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export type SeedModel = {
  cleanUp(): Promise<void>;
};

export type SeedDataModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> & {
  afterCreate?(
    output: ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TRoot>,
  ): Promise<void>;
  data?(): Array<TType>;
  root?(): Promise<string | undefined>;
};
