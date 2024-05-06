import { type _BabelConfigModel, type BabelConfigModel } from '@lib/config/node/babel/babel.models';

export const _babel = ({ plugins, presets }: BabelConfigModel): _BabelConfigModel => ({
  compact: process.env.NODE_ENV === 'production',

  minified: process.env.NODE_ENV === 'production',

  plugins,

  presets,
});
