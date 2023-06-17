import type { ConstructorModel } from '#lib-shared/core/core.models';

export type RootParamsModel<TRoot> = {
  RootResource?: ConstructorModel<TRoot>;
  name: string;
};
