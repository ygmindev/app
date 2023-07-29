export const NODE_UPGRADE_EXCLUDES: Record<string, string> = {
  '@types/inquirer': '^8.2.2',
  inquirer: '^8.2.2',
  'react-native-vector-icons': '^9.2.0', // 10.0.0 incompatible with createAnimatedComponent
  typescript: '4.7.4',
};
