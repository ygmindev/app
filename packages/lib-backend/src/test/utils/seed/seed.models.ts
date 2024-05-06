import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';

export type SeedModel = void;

export type SeedDataModel<TType> = ResourceNameParamsModel & {
  data(): Array<TType>;
};
