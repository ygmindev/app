import { FILE_CONFIG } from '@lib/config/file/file.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const FS_FIXTURE = {
  file: '...',
  packages: FILE_CONFIG.packagePrefixes.reduce(
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
