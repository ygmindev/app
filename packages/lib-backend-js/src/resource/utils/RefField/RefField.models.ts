import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourcePartialModel } from '@lib/shared/resource/resource.models';

export type RefFieldModel<TType extends EntityResourceModel> = EntityResourcePartialModel<TType>;
