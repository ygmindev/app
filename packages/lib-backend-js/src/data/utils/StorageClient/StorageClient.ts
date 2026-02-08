import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { _StorageClient } from '@lib/backend/data/utils/StorageClient/_StorageClient';
import { StorageClientModel } from '@lib/backend/data/utils/StorageClient/StorageClient.models';

@withContainer()
export class StorageClient extends _StorageClient implements StorageClientModel {}
