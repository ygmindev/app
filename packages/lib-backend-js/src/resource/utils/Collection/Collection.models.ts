import {
  type _CollectionModel,
  type _CollectionParamsModel,
} from '@lib/backend/resource/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CollectionParamsModel<TRoot extends EntityResourceModel> =
  _CollectionParamsModel<TRoot>;

export type CollectionModel<TType extends EntityResourceModel> = _CollectionModel<TType>;
