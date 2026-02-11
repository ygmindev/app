import { type StorageConfigModel } from '@lib/config/storage/storage.models';
import { Config } from '@lib/config/utils/Config/Config';

export const storageConfig = new Config<StorageConfigModel>({
  params: () => ({
    accessKeyId: process.env.SERVER_STORAGE_KEY_ID ?? 'UNKNOWN',

    bucketId: process.env.SERVER_STORAGE_BUCKET_ID ?? 'UNKNOWN',

    contentTypes: ['image/jpeg', 'image/png', 'image/webp'],

    endpoint: process.env.SERVER_STORAGE_BUCKET_ENDPOINT ?? 'UNKNOWN',

    endpointPublic: process.env.SERVER_STORAGE_BUCKET_ENDPOINT_PUBLIC ?? 'UNKNOWN',

    secret: process.env.SERVER_STORAGE_KEY_SECRET ?? 'UNKNOWN',
  }),
});
