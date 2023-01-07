import { PACKAGE_PREFIXES } from '@lib/backend/file/utils/packages/packages.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const FS_FIXTURE = {
  file: '...',
  packages: PACKAGE_PREFIXES.reduce(
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
