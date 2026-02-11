import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { STORAGE_RESOURCE_NAME } from '@lib/model/data/Storage/Storage.constants';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';

export const STORAGE_RESOURCE_PARAMS = {
  fields: [{ id: 'filename' }, { id: 'uri' }, { id: 'src' }],
  name: STORAGE_RESOURCE_NAME,
} satisfies ResourceParamsModel<StorageModel>;
