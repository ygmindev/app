import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { StorageClient } from '@lib/backend/data/utils/StorageClient/StorageClient';
import { StorageClientModel } from '@lib/backend/data/utils/StorageClient/StorageClient.models';
import { StorageModel } from '@lib/model/data/Storage/Storage.models';
import { type StorageImplementationModel } from '@lib/model/data/Storage/StorageImplementation/StorageImplementation.models';
import { BooleanValueModel } from '@lib/model/resource/BooleanValue/BooleanValue.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';

@withContainer()
export class StorageImplementation implements StorageImplementationModel {
  @withInject(StorageClient) storageClient!: StorageClientModel;

  async presign(params: Partial<StorageModel>): Promise<Partial<StorageModel>> {
    const { key, src, uri } = await this.storageClient.presign(params);
    return { ...params, key, src, uri };
  }

  async presignMany(
    params: Array<Partial<StorageModel>>,
  ): Promise<Array<Partial<StorageModel> | null>> {
    const result = await Promise.allSettled(params.map((p) => this.presign(p)));
    result
      .filter((v): v is PromiseRejectedResult => v.status === 'rejected')
      .forEach((v) => console.error('presign failed:', v.reason));
    return result.map((v) => (v.status === 'fulfilled' ? v.value : null));
  }

  async remove(params: string): Promise<BooleanValueModel> {
    if (!params) throw new NotFoundError('id');
    await this.storageClient.remove(params);
    return { value: true };
  }
}
