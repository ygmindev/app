import { _Store } from '@lib/frontend/state/utils/Store/_Store';
import { type StoreModel } from '@lib/frontend/state/utils/Store/Store.models';

export class Store<
    TKeys extends Array<string>,
    TType extends Record<TKeys[number], object>,
    TParams extends Record<TKeys[number], object>,
  >
  extends _Store<TKeys, TType, TParams>
  implements StoreModel<TKeys, TType, TParams> {}
