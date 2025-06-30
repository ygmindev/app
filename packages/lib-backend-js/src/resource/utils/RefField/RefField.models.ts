import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '@lib/model/core/EntityResource/EntityResource.models';

export type RefFieldModel<TType extends EntityResourceModel> = EntityResourcePartialModel<TType>;
