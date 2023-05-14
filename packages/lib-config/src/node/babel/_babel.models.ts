import type { TransformOptions } from '@babel/core';

export interface _BabelConfigParamsModel {
  plugins?: Array<string | [string, object]>;

  presets?: Array<string | [string, object]>;
}

export interface _BabelConfigModel extends TransformOptions {}
