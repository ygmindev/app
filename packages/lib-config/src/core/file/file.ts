import type { FileConfigModel } from '@lib/config/core/file/file.models';

const CLEAN_PATTERNS = [
  '.cache',
  '.esbuild',
  '.eslintcache',
  '.swc',
  '*.log*',
  '.DS_Store',
  'dist',
  'coverage',
  'public/assets',
];

export const config: FileConfigModel = {
  cleanPatterns: CLEAN_PATTERNS,

  excludePatterns: [...CLEAN_PATTERNS, '.git', 'backups', 'ios/Pods', 'node_modules'],
};
