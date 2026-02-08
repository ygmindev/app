import { type UseStorageResourceModel } from '@lib/frontend/data/hooks/useStorageResource/useStorageResource.models';
import { STORAGE_RESOURCE_PARAMS } from '@lib/frontend/data/resources/Storage/Storage.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';

export const useStorageResource = (): UseStorageResourceModel =>
  useResource<StorageModel>({
    ...STORAGE_RESOURCE_PARAMS,
  });
