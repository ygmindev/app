import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const FS_FIXTURE = {
  file: '...',
  packages: PACKAGE_PREFIXES.reduce(
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
