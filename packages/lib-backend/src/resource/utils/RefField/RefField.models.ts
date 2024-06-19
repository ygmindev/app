import {
  type EntityResourceModel,
  type EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type RefFieldModel<TType extends EntityResourceModel> = EntityResourcePartialModel<TType>;
