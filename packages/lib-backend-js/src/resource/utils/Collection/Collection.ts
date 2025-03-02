import { _Collection } from '@lib/backend/resource/utils/Collection/_Collection';
import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export class Collection<TType extends EntityResourceModel, TRoot extends EntityResourceModel>
  extends _Collection<TType, TRoot>
  implements CollectionModel<TType> {}
