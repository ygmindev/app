import { type FileConfigModel } from '@lib/config/file/file.models';

export const BACKUP_DIR = 'backups';

export const BUILD_DIR = '_build';

export const CACHE_DIR = '_cache';

// TODO: Update
export const CLEAN_PATTERNS = [
  BUILD_DIR,
  CACHE_DIR,
  '.vite',
  '.esbuild',
  '.serverless',
  '.eslintcache',
  '.swc',
  '*.log*',
  '.DS_Store',
  '.coverage*',
  'coverage',
  '__pycache__',
  '.pytest_cache',
  '.mypy_cache',
  '.test',
  '*.0x',
];

export const DIST_DIR = '_dist';

export const PACKAGE_PREFIXES = ['app', 'service', 'lib', 'tool'];

export const PRUNE_PATTERNS: Array<string> = [
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

export const PUBLIC_DIR = 'public';

export const ASSETS_DIR = 'assets';

export const EXCLUDE_PATTERNS = [...CLEAN_PATTERNS, '.git', 'ios/Pods', 'node_modules'];

export const EXTENSIONS_BASE = ['.tsx', '.ts', '.jsx', '.js'];

export const FILE_CONFIG: Pick<
  FileConfigModel,
  | 'assetsDir'
  | 'buildDir'
  | 'cacheDir'
  | 'cleanPatterns'
  | 'distDir'
  | 'excludePatterns'
  | 'packagePrefixes'
  | 'prunePatterns'
  | 'publicDir'
> = {
  assetsDir: ASSETS_DIR,
  buildDir: BUILD_DIR,
  cacheDir: CACHE_DIR,
  cleanPatterns: CLEAN_PATTERNS,
  distDir: DIST_DIR,
  excludePatterns: [...CLEAN_PATTERNS, '.git', '.venv', 'ios/Pods', 'node_modules'],
  packagePrefixes: PACKAGE_PREFIXES,
  prunePatterns: PRUNE_PATTERNS,
  publicDir: PUBLIC_DIR,
};
