import type { ConstructorModel } from '@lib/shared/core/core.models';

export interface WithRootParamsModel<TRoot = undefined> {
  Root?: TRoot extends undefined ? never : ConstructorModel<TRoot>;
  name: string;
}
