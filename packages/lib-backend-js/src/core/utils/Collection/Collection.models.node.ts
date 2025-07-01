import { type _CollectionModel } from '@lib/backend/core/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type CollectionParamsModel<TRoot extends EntityResourceModel> = TRoot;

export type CollectionModel<TType extends EntityResourceModel> = _CollectionModel<TType>;
