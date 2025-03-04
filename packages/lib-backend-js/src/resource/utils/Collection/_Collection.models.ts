import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type _CollectionParamsModel<TRoot extends EntityResourceModel> = TRoot;

export type _CollectionModel<TType extends EntityResourceModel> = Pick<
  Array<EntityResourcePartialModel<TType>>,
  'filter' | 'find' | 'map' | 'slice'
>;
