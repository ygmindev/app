import commands from '@callstack/repack/commands';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const reactNativeConfig = {
  commands,
  reactNativePath: fromRoot('node_modules/react-native'),
};
