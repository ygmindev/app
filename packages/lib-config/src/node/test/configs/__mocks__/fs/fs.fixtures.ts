import { uid } from '@lib/shared/core/utils/uid/uid';
import { PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';

export const FS_FIXTURE = {
  file: '...',
  packages: PACKAGE_PREFIXES.reduce(
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
