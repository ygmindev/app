import type { TransformOptions } from '@babel/core';
import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';

export type BabelConfigModel = ConfigStaticModel<{
  plugins?: Array<string | [string, object]>;

  presets?: Array<string | [string, object]>;
}>;

export type _BabelConfigModel = ConfigDynamicModel<TransformOptions>;
