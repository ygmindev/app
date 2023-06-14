import type { ConstructorModel } from '#lib-shared/core/core.models';

export interface RootParamsModel<TRoot> {
  RootResource?: ConstructorModel<TRoot>;
  name: string;
}
