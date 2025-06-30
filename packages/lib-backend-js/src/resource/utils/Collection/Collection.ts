import { _Collection } from '@lib/backend/core/utils/Collection/_Collection';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export class Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends _Collection<TType, TRoot>
  implements CollectionModel<TType> {}
