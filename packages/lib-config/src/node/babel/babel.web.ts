import { _babel } from '#lib-config/node/babel/_babel';
import { config as configFrontend } from '#lib-config/node/babel/babel.frontend';
import type { _BabelConfigModel, BabelConfigModel } from '#lib-config/node/babel/babel.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: BabelConfigModel = merge(
  [
    {
      plugins: [],

      presets: [],
    },

    configFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export const _config: _BabelConfigModel = () => _babel(config);

// import { _babel } from '#lib-config/node/babel/_babel';
// import { config as configFrontend } from '#lib-config/node/babel/babel.frontend';
// import type { _BabelConfigModel, BabelConfigModel } from '#lib-config/node/babel/babel.models';
// import { merge } from '#lib-shared/core/utils/merge/merge';
// import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

// export const config: BabelConfigModel = merge(
//   [
//     {
//       plugins: ['@emotion', 'react-native-web'],

//       presets: [],
//     },

//     configFrontend,
//   ],
//   MERGE_STRATEGY.DEEP_PREPEND,
// );

// export const _config: _BabelConfigModel = () => _babel(config);
