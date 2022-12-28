import commands from '@callstack/repack/commands';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';

export const reactNativeConfig = {
  commands,
  reactNativePath: fromModules('react-native'),
};
