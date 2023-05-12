import type {
  _BabelConfigModel,
  _BabelConfigParamsModel,
} from '@lib/config/javascript/babel/_babel.models';

export const _babelConfig = ({ plugins, presets }: _BabelConfigParamsModel): _BabelConfigModel => ({
  compact: process.env.NODE_ENV === 'production',

  minified: process.env.NODE_ENV === 'production',

  plugins,

  presets,
});
