import { type _StorageClientModel } from '@lib/backend/data/utils/StorageClient/_StorageClient.models';
import { storageConfig } from '@lib/config/storage/storage';
import { type StorageModel } from '@lib/model/data/Storage/Storage.models';
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

  async signUri(params: Partial<StorageModel>): Promise<Partial<StorageModel>> {
    const { bucketId, endpoint, endpointPublic } = storageConfig.params();
    const key = `${Date.now()}-${params.filename}`;
    const uri = new URL(`${endpoint}/${bucketId}/${key}`);
    const { url } = await this._client.sign(
      new Request(uri, {
        headers: { 'Content-Type': params.filetype ?? '' },
        method: HTTP_METHOD.PUT,
      }),
      { aws: { signQuery: true } },
    );
    return { ...params, src: `${endpointPublic}/${key}}`, uri: url };
  }
}
