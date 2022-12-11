import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { RenameParamsModel } from '@tool/task/core/utils/rename/rename.models';

export const NODE_POST_INSTALL_RENAMES: Array<RenameParamsModel> = [
  {
    from: 'Transitioning.js',
    path: fromRoot('node_modules/react-native-reanimated/lib/reanimated1'),
    to: 'Transitioning.jsx',
  },

  {
    from: 'createAnimatedComponent.js',
    path: fromRoot('node_modules/react-native-reanimated/lib'),
    to: 'createAnimatedComponent.jsx',
  },

  {
    from: 'FlatList.js',
    path: fromRoot('node_modules/react-native-reanimated/lib/reanimated2/component'),
    to: 'FlatList.jsx',
  },

  {
    from: 'createAnimatableComponent.js',
    path: fromRoot('node_modules/react-native-animatable'),
    to: 'createAnimatableComponent.jsx',
  },

  {
    from: 'create-icon-set.js',
    path: fromRoot('node_modules/react-native-vector-icons/lib'),
    to: 'create-icon-set.jsx',
  },

  {
    from: 'icon-button.js',
    path: fromRoot('node_modules/react-native-vector-icons/lib'),
    to: 'icon-button.jsx',
  },
];
