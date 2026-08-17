import { useGraphql } from '@lib/frontend/data/hooks/useGraphql/useGraphql';
import { type UseStorageResourceModel } from '@lib/frontend/data/hooks/useStorageResource/useStorageResource.models';
import {
  PRESIGN,
  PRESIGN_MANY,
  STORAGE_RESOURCE_NAME,
} from '@lib/model/data/Storage/Storage.constants';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type BooleanValueModel } from '@lib/model/resource/BooleanValue/BooleanValue.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const useStorageResource = (): UseStorageResourceModel => {
  const { mutate, query } = useGraphql();

  return {
    presign: async (params) => {
      const result = await query<Partial<StorageModel>, { input: Partial<StorageModel> }>({
        fields: ['src', 'uri'],
        name: PRESIGN,
        params: { input: `${STORAGE_RESOURCE_NAME}Input` },
        variables: { input: params },
      });
      if (!result) throw new NotFoundError('presign result');
      return result;
    },

    presignMany: async (params) => {
      const result = await query<
        Array<Partial<StorageModel>>,
        { input: Array<Partial<StorageModel>> }
      >({
        fields: ['src', 'uri', 'key'],
        name: PRESIGN_MANY,
        params: { input: `[${STORAGE_RESOURCE_NAME}Input!]` },
        variables: { input: params },
      });
      if (!result) throw new NotFoundError('presign result');
      return result;
    },

    remove: async (params) => {
      const result = await mutate<BooleanValueModel, { input: string }>({
        fields: ['value'],
        name: `${STORAGE_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.REMOVE}`,
        params: { input: 'String' },
        variables: { input: params },
      });
      if (!result) return { value: false };
      return result;
    },
  };
};
