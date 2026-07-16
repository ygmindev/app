import { type RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import {
  type _UseStoreModel,
  type _UseStoreParamsModel,
} from '@lib/frontend/state/hooks/useStore/_useStore.models';
import { type ActionModel } from '@lib/frontend/state/state.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';

export type UseStoreParamsModel<TKey extends DeepKeyModel<RootStateModel>> = _UseStoreParamsModel<
  RootStateModel,
  TKey
>;

export type UseStoreModel<TKey extends DeepKeyModel<RootStateModel>> = ActionModel<
  GetValueModel<RootStateModel, TKey>
> & {
  value?: _UseStoreModel<RootStateModel, TKey>;
  get(): _UseStoreModel<RootStateModel, TKey>;
};
