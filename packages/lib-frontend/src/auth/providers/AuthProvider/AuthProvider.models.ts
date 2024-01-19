import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type StorageModel } from '@lib/frontend/state/utils/Storage/Storage.models';

export type AuthProviderPropsModel = ProviderPropsModel<{ storage?: StorageModel }>;
