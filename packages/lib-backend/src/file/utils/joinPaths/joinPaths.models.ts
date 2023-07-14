import { type FilterNilParamsModel } from '#lib-shared/core/utils/filterNil/filterNil.models';

export type JoinPathsParamsModel = {
  extension?: string;
  paths: FilterNilParamsModel<string>;
};

export type JoinPathsModel = string;
