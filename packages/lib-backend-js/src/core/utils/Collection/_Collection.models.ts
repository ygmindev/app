import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourcePartialModel } from '@lib/shared/resource/resource.models';

export type _CollectionParamsModel<TRoot extends EntityResourceModel> = TRoot;

export type _CollectionModel<TType extends EntityResourceModel> = Pick<
  Array<EntityResourcePartialModel<TType>>,
  'filter' | 'find' | 'length' | 'map' | 'push' | 'slice'
> & {
  [i: number]: EntityResourcePartialModel<TType>;
  delete(params: EntityResourcePartialModel<TType>): void;
};
