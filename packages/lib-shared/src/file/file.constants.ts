const _permuteExtensions = (x: Array<string>, y: Array<string>): Array<string> =>
  x.flatMap((a) => y.map((b) => `${a}${b}`));

export const EXTENSIONS_JS = ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.cjs'];

export const EXTENSIONS_BACKEND = _permuteExtensions(['.backend'], EXTENSIONS_JS);

export const EXTENSIONS_FRONTEND = _permuteExtensions(['.frontend'], EXTENSIONS_JS);

export const EXTENSIONS_WEB = _permuteExtensions(['.web'], EXTENSIONS_JS);

export const EXTENSIONS_NATIVE = _permuteExtensions(['.native', '.ios', '.android'], EXTENSIONS_JS);

export const EXTENSIONS_TEST = _permuteExtensions(['.e2e', '.spec'], EXTENSIONS_JS);

export const PACKAGE_PREFIXES: Array<string> = ['app', 'lib', 'server', 'tool'];

export const CLEAN_PATTERNS = [
  '**/.cache',
  '**/*.log*',
  '**/.DS_Store',
  '**/dist',
  '**/coverage',
  '**/public/assets',
];

export const EXCLUDE_PATTERNS = [
  ...CLEAN_PATTERNS,
  '**/.git',
  '**/backups',
  '**/ios/Pods',
  '**/node_modules',
];

export const TRANSPILE_GLOBS = [
  '@expo',
  '@react-native*',
  'moti',
  'react-native-!(codegen|gradle-plugin)',
  'react-native',
];
