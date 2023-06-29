import { type RootStateModel } from '#lib-frontend/root/stores/rootStore.models';
import {
  type _UseStoreModel,
  type _UseStoreParamsModel,
} from '#lib-frontend/state/hooks/useStore/_useStore.models';

export type UseStoreParamsModel<TValue> = _UseStoreParamsModel<RootStateModel, TValue>;

export type UseStoreModel<TType> = _UseStoreModel<TType>;
