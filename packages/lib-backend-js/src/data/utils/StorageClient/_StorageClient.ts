import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { type _StorageClientModel } from '@lib/backend/data/utils/StorageClient/_StorageClient.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { lookup } from 'mime-types';

export class _StorageClient implements _StorageClientModel {
  protected _client!: S3Client;

  constructor() {
    this._client = new S3Client({
      credentials: {
        accessKeyId: process.env.SERVER_STORAGE_KEY_ID,
        secretAccessKey: process.env.SERVER_STORAGE_KEY_SECRET,
      },
      endpoint: process.env.SERVER_STORAGE_BUCKET_ENDPOINT,
      region: 'auto',
    });
  }

  async getUri(params: string): Promise<string> {
    const fileType = lookup(params);
    const key = `${params}-${uid()}`;
    const command = new PutObjectCommand({
      Bucket: process.env.SERVER_STORAGE_BUCKET_ID,
      ContentType: fileType || '',
      Key: key,
    });
    return getSignedUrl(this._client as never, command as never, {
      expiresIn: 3600,
    });
  }
}
