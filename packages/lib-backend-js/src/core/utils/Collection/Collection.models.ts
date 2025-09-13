import { type _CollectionParamsModel } from '@lib/backend/core/utils/Collection/_Collection.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type CollectionParamsModel<TRoot extends EntityResourceModel> =
  _CollectionParamsModel<TRoot>;

export type CollectionModel<TType extends EntityResourceModel> = PartialArrayModel<TType>;
