import type { RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import type { _UseStoreParamsModel } from '@lib/frontend/state/hooks/useStore/_useStore.models';

export interface UseStoreParamsModel<TValue> extends _UseStoreParamsModel<RootStateModel, TValue> {}
