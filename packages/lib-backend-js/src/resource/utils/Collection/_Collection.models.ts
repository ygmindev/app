import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type _CollectionParamsModel<TRoot extends EntityResourceModel> = TRoot;

export type _CollectionModel<TType extends EntityResourceModel> = Pick<
  Array<Partial<TType>>,
  'filter' | 'find' | 'length' | 'map' | 'push' | 'slice'
> & {
  [i: number]: Partial<TType>;
  delete(params: Partial<TType>): void;
};
