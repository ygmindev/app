import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '@lib/model/resource/EntityResource/EntityResource.models';

export type RefFieldModel<TType extends EntityResourceModel> = EntityResourcePartialModel<TType>;
