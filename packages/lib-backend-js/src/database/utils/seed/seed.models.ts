import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type SeedModel = void;

export type SeedDataModel<TType> = ResourceNameParamsModel & {
  afterCreate?(output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, TType>): Promise<void>;
  data(): Array<TType>;
};
