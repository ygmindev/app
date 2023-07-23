// COMPLETE
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '#lib-config/core/file/file.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const BUILD_PATH = '.build';

const DIST_PATH = '.dist';

const PATH_PATH = '.cache';

// TODO: Update
const CLEAN_PATTERNS = [
  BUILD_PATH,
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

    buildPath: BUILD_PATH,

    cachePath: PATH_PATH,

    cleanPatterns: CLEAN_PATTERNS,

    distPath: DIST_PATH,

    excludePatterns: [...CLEAN_PATTERNS, '.git', 'ios/Pods', 'node_modules'],

    packagePrefixes: ['app', 'backend', 'lib', 'tool'],
  } satisfies FileConfigModel,
});

export { _config, config };
