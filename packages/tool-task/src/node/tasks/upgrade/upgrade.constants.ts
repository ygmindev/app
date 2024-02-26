export const NODE_UPGRADE_EXCLUDES: Record<string, string> = {
  '@types/inquirer': '^8.2.2',
  inquirer: '^8.2.2',
  // no commonjs
  'p-queue': '^6.6.2',
  // 10.0.0 incompatible with createAnimatedComponent
  'react-native-vector-icons': '^9.2.0',
  'ts-toolbelt': '^9.3.0',
  typescript: '4.7.4',
};
