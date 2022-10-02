const _permuteExtensions = (x: Array<string>, y: Array<string>): Array<string> =>
  x.flatMap((a) => y.map((b) => `${a}${b}`));

export const NODE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.json'];

export const BACKEND_EXTENSIONS = _permuteExtensions(['.backend'], NODE_EXTENSIONS);

export const FRONTEND_EXTENSIONS = _permuteExtensions(['.frontend'], NODE_EXTENSIONS);

export const WEB_EXTENSIONS = _permuteExtensions(['.web'], NODE_EXTENSIONS);

export const NATIVE_EXTENSIONS = _permuteExtensions(
  ['.native', '.ios', '.android'],
  NODE_EXTENSIONS,
);

export const PACKAGE_PREFIXES: Array<string> = ['app', 'asset', 'lib', 'server', 'tool'];

export const CLEAN_PATTERNS = [
  '**/.cache',
  '**/*.log*',
  '**/.DS_Store',
  '**/dist',
  '**/coverage',
  '**/public/assets',
];

export const TEST_EXTENSIONS = ['e2e', 'spec'];

export const EXCLUDE_PATTERNS = [
  ...CLEAN_PATTERNS,
  '**/.git',
  '**/backups',
  '**/ios/Pods',
  '**/node_modules',
];

export const TRANSPILE_GLOBS = [
  'firebase/app/dist/index.esm.js',
  '@amplitude/react-native',
  '@callstack/repack',
  '@expo',
  '@firebase',
  '@react-native*',
  'abort-controller',
  'firebase',
  'metro',
  'pretty-format',
  'react-native*',
  'react-router-native',
];
