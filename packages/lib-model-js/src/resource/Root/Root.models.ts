import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type RootParamsModel<TRoot = undefined> = {
  name: string;
  RootResource?(): ResourceClassModel<TRoot>;
};

export type RootModel<TRoot = undefined> = {
  root?: PartialModel<TRoot>;
};

export type RootInputModel<TRoot = undefined> = {
  root?: TRoot extends undefined ? never : string;
};

export type RootNameInputModel<TRoot = undefined> = {
  rootName?: TRoot extends undefined ? never : string;
};
