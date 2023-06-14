import type { TransformOptions } from '@babel/core';

import type { ConfigDynamicModel } from '#lib-config/core/core.models';

export interface BabelConfigModel {
  plugins?: Array<string | [string, object]>;

  presets?: Array<string | [string, object]>;
}

export type _BabelConfigModel = ConfigDynamicModel<TransformOptions>;
