import { uid } from '@lib/shared/core/utils/uid/uid';
import { PACKAGE_PREFIXES } from '@lib/shared/file/file.constants';
import { reduce } from 'lodash';

export const FS_FIXTURE = {
  file: '...',
  packages: reduce(
    PACKAGE_PREFIXES,
    (result, prefix) => ({ ...result, [uid(prefix)]: { [`file-${prefix}`]: '...' } }),
    {},
  ),
};
