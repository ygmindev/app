// COMPLETE
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { type FileConfigModel } from '@lib/config/file/file.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const BUILD_PATH = '_build';

const DIST_PATH = '_dist';

const CACHE_PATH = '_cache';

const PUBLIC_PATH = 'assets';

// TODO: Update
const CLEAN_PATTERNS = [
  BUILD_PATH,
  CACHE_PATH,
  '.vite',
  '.esbuild',
  '.serverless',
  '.eslintcache',
  '.swc',
  '*.log*',
  '.DS_Store',
  'coverage',
];

const PRUNE_PATTERNS: Array<string> = [
  'node_modules/rxjs/src/**',
  'node_modules/rxjs/bundles/**',
  'node_modules/rxjs/_esm5/**',
  'node_modules/rxjs/_esm2015/**',
  'node_modules/grpc/deps/grpc/third_party/**',
  'node_modules/@aws-sdk',
  'node_modules/aws-sdk',
  'node_modules/**/*.md',
  'node_modules/**/*.flow',
  'node_modules/**/*.patch',
  'node_modules/**/*.conf',
  'node_modules/**/*.markdown',
  'node_modules/**/*.coffee',
  'node_modules/**/jsdoc_conf.json',
  'node_modules/**/*Makefile',
  'node_modules/**/Dockerfile',
  'node_modules/**/*.txt',
  'node_modules/**/*.yml',
  'node_modules/**/*.xml',
  'node_modules/**/*.html',
  'node_modules/**/test/**',
  'node_modules/**/tests/**',
  'node_modules/**/examples/**',
  'node_modules/**/coverage/**',
  'node_modules/**/.nyc_output/**',
  'node_modules/**/(!chromium)/bin/**',
  'node_modules/**/bower.json',
  'node_modules/**/karma.conf.js',
  'node_modules/**/Gruntfile.js',
  'node_modules/**/rollup.config.*',
  'node_modules/**/yarn.lock',
  'node_modules/**/sonar-project.properties',
  'node_modules/**/package-lock.json',
  'node_modules/**/*.d.ts',
  'node_modules/**/*.map',
  'node_modules/**/tsconfig.json',
  'node_modules/**/AUTHORS',
  'node_modules/**/CODEOWNERS',
  'node_modules/**/OWNERS',
  'node_modules/**/*.iml',
  'node_module/**/*.bash_completion.in',
  'node_modules/**/*.gif',
  'node_modules/**/*.png',
  'node_modules/**/*.jpg',
  'node_modules/**/*.jpeg',
  'node_modules/**/winston/scratch/**',
  'node_modules/**/sshpk/man/**',
  'node_modules/**/bluebird/js/browser/**',
  'node_modules/**/date-fns/docs.json',
  'node_modules/**/aws-xray-sdk-core/doc-src/**',
];

const { config } = defineConfig({
  config: {
    backupDir: fromRoot('../backups'),

    buildPath: BUILD_PATH,

    cachePath: CACHE_PATH,

    cleanPatterns: CLEAN_PATTERNS,

    distPath: DIST_PATH,

    excludePatterns: [...CLEAN_PATTERNS, '.git', 'ios/Pods', 'node_modules'],

    packagePrefixes: ['app', 'backend', 'lib', 'tool'],

    prunePatterns: PRUNE_PATTERNS,

    publicPath: PUBLIC_PATH,
  } satisfies FileConfigModel,
});

export { config };
