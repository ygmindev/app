import type { _BabelConfigModel, BabelConfigModel } from '@lib/config/node/babel/babel.models';
import { ReturnTypeModel } from '@lib/shared/core/core.models';

export const _babel = ({
  plugins, presets
}: BabelConfigModel): ReturnTypeModel<_BabelConfigModel> => ({
  compact: process.env.NODE_ENV === 'production',

  minified: process.env.NODE_ENV === 'production',

  plugins,

  presets,
});
