import { type FilterNilParamsModel } from '@lib/shared/core/utils/filterNil/filterNil.models';

export type JoinPathsParamsModel = [
  paths: FilterNilParamsModel<string>,
  options?: { extension?: string },
];

export type JoinPathsModel = string;
