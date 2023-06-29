import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '#lib-config/core/file/file.models';

const BUILD_DIR = '.build';

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
  backupDir: fromRoot('../backups'),

  buildDir: fromRoot(BUILD_DIR),

  cleanPatterns: CLEAN_PATTERNS,

  excludePatterns: [...CLEAN_PATTERNS, '.git', '.backups', 'ios/Pods', 'node_modules'],

  packagePrefixes: ['app', 'build', 'backend', 'lib', 'tool'],
};
