import {
  type CollectionModel,
  type CollectionParamsModel,
} from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export class Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends Array
  implements CollectionModel<TType>
{
  constructor(_params: CollectionParamsModel<TRoot>) {
    super();
  }
}
