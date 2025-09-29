import { _Store } from '@lib/frontend/state/utils/Store/_Store';
import { type StoreModel } from '@lib/frontend/state/utils/Store/Store.models';

export class Store<TType extends Record<string, unknown>>
  extends _Store<TType>
  implements StoreModel<TType> {}
