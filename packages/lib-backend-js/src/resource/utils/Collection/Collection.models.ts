import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type CollectionModel<TType extends EntityResourceModel> = Array<TType>;
