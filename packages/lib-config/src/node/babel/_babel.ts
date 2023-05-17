import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type {
  _BabelConfigModel,
  BabelConfigModel,
} from '@lib/config/node/babel/_babel.models';

export const _babelConfig: _BabelConfigModel = async () => {
  const { plugins, presets } = await importConfig<BabelConfigModel>('node/babel/babel');
  return {
    compact: process.env.NODE_ENV === 'production',
  
    minified: process.env.NODE_ENV === 'production',
  
    plugins,
  
    presets,
  }
};
