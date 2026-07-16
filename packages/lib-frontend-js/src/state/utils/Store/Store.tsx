import { _Store } from '@lib/frontend/state/utils/Store/_Store';
import { type StoreModel } from '@lib/frontend/state/utils/Store/Store.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export class Store<
  TType extends Record<string, unknown>,
  TReducers extends Record<StringKeyModel<TType>, unknown>,
>
  extends _Store<TType, TReducers>
  implements StoreModel<TType, TReducers> {}
