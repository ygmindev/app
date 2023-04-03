import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import type { RenameParamsModel } from '@tool/task/core/utils/rename/rename.models';

export const NODE_POST_INSTALL_RENAMES: Array<RenameParamsModel> = [
  {
    from: 'createAnimatableComponent.js',
    path: fromModules('react-native-animatable'),
    to: 'createAnimatableComponent.jsx',
  },

  {
    from: 'createAnimatedComponent.js',
    path: fromModules('react-native-reanimated/lib'),
    to: 'createAnimatedComponent.jsx',
  },

  {
    from: 'create-icon-set.js',
    path: fromModules('react-native-vector-icons/lib'),
    to: 'create-icon-set.jsx',
  },

  {
    from: 'icon-button.js',
    path: fromModules('react-native-vector-icons/lib'),
    to: 'icon-button.jsx',
  },

  {
    from: 'Switch.js',
    path: fromModules('react-native-switch/lib'),
    to: 'Switch.jsx',
  },
];
