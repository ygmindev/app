import { type TransformOptions } from '@babel/core';

export type BabelConfigModel = {
  plugins?: Array<string | [string, object]>;

  presets?: Array<string | [string, object]>;
};

export type _BabelConfigModel = TransformOptions;
