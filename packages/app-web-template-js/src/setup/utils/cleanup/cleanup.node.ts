import { type CleanupModel } from '@app/web/setup/utils/cleanup/cleanup.models';
import { cleanup as cleanupBackend } from '@lib/backend/setup/utils/cleanup/cleanup';

export const cleanup = async (): Promise<CleanupModel> => {
  await cleanupBackend();
};
