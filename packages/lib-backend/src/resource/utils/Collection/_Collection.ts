import { Collection } from '@mikro-orm/core';

import { type _CollectionModel } from '@lib-backend/resource/utils/Collection/_Collection.models';

export class _Collection<TType>
  extends Collection<TType & object>
  implements _CollectionModel<TType> {}
