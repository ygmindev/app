import { type CleanupModel } from '@app/web/setup/utils/cleanup/cleanup.models.server';
import { cleanup as cleanupBackend } from '@lib/backend/setup/utils/cleanup/cleanup';

export const cleanup = async (): Promise<CleanupModel> => {
  await cleanupBackend();
};
