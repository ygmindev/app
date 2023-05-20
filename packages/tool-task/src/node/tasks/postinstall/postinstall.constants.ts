import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';

export const NODE_POST_INSTALL_JS_TO_JSX: Array<string> = [
  fromModules('react-native-animatable/createAnimatableComponent.js'),
  fromModules('react-native-reanimated/lib/createAnimatedComponent.js'),
  fromModules('react-native-vector-icons/lib/create-icon-set.js'),
  fromModules('react-native-vector-icons/lib/icon-button.js'),
  fromModules('moti/build/core/use-motify.js'),
  fromModules('moti/src/core/use-motify.ts'),
];
