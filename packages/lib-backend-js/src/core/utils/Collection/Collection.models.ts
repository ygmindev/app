import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type CollectionModel<TType extends EntityResourceModel> = Array<TType>;
