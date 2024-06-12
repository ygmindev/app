import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type GetEntityResourceFixtureParamsModel<
  TType extends EntityResourceModel,
  TCount extends undefined | number = undefined,
> = {
  count?: TCount;
  data(params: { _id: string; index: number }): Omit<TType, keyof EntityResourceModel>;
};

export type GetEntityResourceFixtureModel<
  TType extends EntityResourceModel,
  TCount extends undefined | number = undefined,
> = TCount extends undefined ? TType : Array<TType>;
