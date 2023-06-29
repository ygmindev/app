import { type ClassModel } from '#lib-shared/core/core.models';

export type RootParamsModel<TRoot> = {
  RootResource?: ClassModel<TRoot>;
  name: string;
};
