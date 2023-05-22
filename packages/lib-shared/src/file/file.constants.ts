import { CLEAN_PATTERNS } from '@tool/task/core/utils/runClean/runClean.constants';

export const EXCLUDE_PATTERNS = [
  ...CLEAN_PATTERNS,
  '.git',
  'backups',
  'ios/Pods',
  'node_modules',
];
