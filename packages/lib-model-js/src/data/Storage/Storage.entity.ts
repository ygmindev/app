import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { STORAGE_RESOURCE_NAME } from '@lib/model/data/Storage/Storage.constants';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';

@withEntity({ name: STORAGE_RESOURCE_NAME })
export class Storage implements StorageModel {
  @withField({ isOptional: true })
  filename?: string;

  @withField({ isOptional: true })
  filetype?: string;

  @withField({ isOptional: true })
  key?: string;

  @withField({ isOptional: true })
  src?: string;

  @withField({ isOptional: true })
  uri?: string;
}
