import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type RootModel<TRoot = undefined> = {
  root?: EntityResourcePartialModel<TRoot>;
};

export type RootInputModel = {
  root?: string;
};
