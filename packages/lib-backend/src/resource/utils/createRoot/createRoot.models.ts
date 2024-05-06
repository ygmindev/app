import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type CreateRootParamsModel<TRoot = undefined> = {
  RootResource?(): ResourceClassModel<TRoot>;
  name: string;
};

export type CreateRootModel<TRoot = undefined> = ResourceClassModel<RootModel<TRoot>> | undefined;
