// COMPLETE
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '#lib-config/core/file/file.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

// TODO: Update
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

    excludePatterns: [...CLEAN_PATTERNS, '.git', 'ios/Pods', 'node_modules'],

    packagePrefixes: ['app', 'backend', 'lib', 'tool'],
  } satisfies FileConfigModel,
});

export { _config, config };
