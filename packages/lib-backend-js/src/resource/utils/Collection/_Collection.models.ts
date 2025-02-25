import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type _CollectionParamsModel<TRoot extends EntityResourceModel> = TRoot;

export type _CollectionModel<TType extends EntityResourceModel> = Pick<
  Array<RefFieldModel<TType>>,
  'filter' | 'find' | 'map' | 'slice'
>;
