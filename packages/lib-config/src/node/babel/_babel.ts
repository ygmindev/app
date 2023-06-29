import { type _BabelConfigModel, type BabelConfigModel } from '#lib-config/node/babel/babel.models';
import { type ReturnTypeModel } from '#lib-shared/core/core.models';

export const _babel = ({
  plugins,
  presets,
}: BabelConfigModel): ReturnTypeModel<_BabelConfigModel> => ({
  compact: process.env.NODE_ENV === 'production',

  minified: process.env.NODE_ENV === 'production',

  plugins,

  presets,
});
