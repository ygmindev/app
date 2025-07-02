import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type RefModel<TType extends EntityResourceModel> = Partial<TType>;
