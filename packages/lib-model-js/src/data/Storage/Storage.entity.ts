import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { STORAGE_RESOURCE_NAME } from '@lib/model/data/Storage/Storage.constants';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { Resource } from '@lib/model/resource/Resource/Resource';

@withEntity({ name: STORAGE_RESOURCE_NAME })
export class Storage extends Resource() implements StorageModel {
  @withField()
  filename!: string;

  @withField({ isOptional: true })
  filetype?: string;

  @withField({ isOptional: true })
  src?: string;

  @withField({ isOptional: true })
  uri?: string;
}
