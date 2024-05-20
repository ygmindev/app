import { type CleanupModel } from 'packages/backend-lambda/src/setup/utils/cleanup/cleanup.models';
import { cleanup as cleanupBackend } from '@lib/backend/setup/utils/cleanup/cleanup';

export const cleanup = async (): Promise<CleanupModel> => {
  await cleanupBackend();
};
