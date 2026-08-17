import { type _StorageClientModel } from '@lib/backend/data/utils/StorageClient/_StorageClient.models';
import { storageConfig } from '@lib/config/storage/storage';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { AwsClient } from 'aws4fetch';

export class _StorageClient implements _StorageClientModel {
  protected _client!: AwsClient;

  constructor() {
    const { accessKeyId, secret } = storageConfig.params();
    this._client = new AwsClient({
      accessKeyId,
      secretAccessKey: secret,
    });
  }

  async presign(params: Partial<StorageModel>): Promise<Partial<StorageModel>> {
    const { bucketId, endpoint, endpointPublic } = storageConfig.params();
    const key = `${params.filename}-${uid()}`;
    const uri = new URL(`${endpoint}/${bucketId}/${key}`);
    const { url } = await this._client.sign(
      new Request(uri, {
        headers: { 'Content-Type': params.filetype ?? '' },
        method: HTTP_METHOD.PUT,
      }),
      { aws: { signQuery: true } },
    );
    return { ...params, key, src: `${endpointPublic}/${key}`, uri: url };
  }

  async remove(params: string): Promise<void> {
    const { bucketId, endpoint } = storageConfig.params();
    const uri = new URL(`${endpoint}/${bucketId}/${params}`);
    const response = await this._client.fetch(uri, { method: HTTP_METHOD.DELETE });
    if (!response.ok) {
      throw new Error(`Failed to delete "${params}": ${response.status} ${response.statusText}`);
    }
  }
}
