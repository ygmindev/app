import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type GetValueModel } from '@lib/shared/core/utils/getValue/getValue.models';

export type _UseStoreParamsModel<TType, TKey extends DeepKeyModel<TType>> = TKey;

export type _UseStoreModel<TType, TKey extends DeepKeyModel<TType>> = GetValueModel<TType, TKey>;
