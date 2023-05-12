import { _babelConfig } from '@lib/config/javascript/babel/_babel.config';
import type { _BabelConfigModel } from '@lib/config/javascript/babel/_babel.models';
import { babelParamsConfig } from '@lib/config/javascript/babel/params/babel.params.base';

export const babelConfig: _BabelConfigModel = _babelConfig(babelParamsConfig);
