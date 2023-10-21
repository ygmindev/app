import { type PartialModel } from '#lib-shared/core/core.models';

export type RootModel<TRoot = undefined> = {
  root?: PartialModel<TRoot>;
};

export type RootInputModel = {
  root?: string;
};
