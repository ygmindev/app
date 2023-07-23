// COMPLETE
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '#lib-config/core/file/file.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const BUILD_DIR = '.build';

const DIST_DIR = '.dist';

// TODO: Update
const CLEAN_PATTERNS = [
  BUILD_DIR,
  DIST_DIR,
  '.cache',
  '.esbuild',
  '.eslintcache',
  '.swc',
  '*.log*',
  '.DS_Store',
  'coverage',
  'public/assets',
];

const { _config, config } = defineConfig({
  config: {
    backupDir: fromRoot('../backups'),

    buildDir: BUILD_DIR,

    cleanPatterns: CLEAN_PATTERNS,

    distDir: DIST_DIR,

    excludePatterns: [...CLEAN_PATTERNS, '.git', 'ios/Pods', 'node_modules'],

    packagePrefixes: ['app', 'backend', 'lib', 'tool'],
  } satisfies FileConfigModel,
});

export { _config, config };
