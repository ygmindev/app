import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '#lib-config/core/file/file.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

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

const { _config, config } = defineConfig({
  config: {
    backupDir: fromRoot('../backups'),

    buildDir: fromRoot('.build'),

    cleanPatterns: CLEAN_PATTERNS,

    excludePatterns: [...CLEAN_PATTERNS, '.git', '.backups', 'ios/Pods', 'node_modules'],

    packagePrefixes: ['app', 'build', 'backend', 'lib', 'tool'],
  } satisfies FileConfigModel,
});

export { _config, config };
