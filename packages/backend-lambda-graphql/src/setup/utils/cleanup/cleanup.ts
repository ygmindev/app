import { type CleanupModel } from '@backend/lambda/setup/utils/cleanup/cleanup.models';
import { cleanup as cleanupBackend } from '@lib/backend/setup/utils/cleanup/cleanup';

export const cleanup = async (): Promise<CleanupModel> => {
  await cleanupBackend();
};
