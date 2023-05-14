import { _babelConfig } from '@lib/config/node/babel/_babel.config';
import type { _BabelConfigModel } from '@lib/config/node/babel/_babel.models';
import { babelParamsConfig } from '@lib/config/node/babel/params/babel.params.base';

export const babelConfig: _BabelConfigModel = _babelConfig(babelParamsConfig);
