import { config } from '@lib/config/file/file';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const FS_FIXTURE = {
  file: '...',
  packages: config.packagePrefixes.reduce(
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
