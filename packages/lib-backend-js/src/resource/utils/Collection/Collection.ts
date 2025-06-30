import { _Collection } from '@lib/model/core/Collection/_Collection';
import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export class Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends _Collection<TType, TRoot>
  implements CollectionModel<TType> {}
