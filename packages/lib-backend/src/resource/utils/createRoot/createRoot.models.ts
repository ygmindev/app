import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';

export type CreateRootParamsModel<TRoot = undefined> = {
  RootResource?: ClassModel<TRoot>;
  name: string;
};

export type CreateRootModel<TRoot = undefined> = ResourceClassModel<RootModel<TRoot>>;
