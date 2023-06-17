import type { Linter } from 'eslint';

import type { ConfigDynamicModel } from '#lib-config/core/core.models';

export type LintConfigModel = ConfigDynamicModel<{
  configFile: string;

  include: Array<string>;

  indentWidth: number;

  isParenthesis?: boolean;

  isSameLine?: boolean;

  isSingleQuote?: boolean;

  isSpacing?: boolean;

  isTrailingComma?: boolean;

  printWidth: number;

  roots: Array<string>;

  unusedIgnore?: string;
}>;

export type _LintConfigModel = ConfigDynamicModel<Linter.Config>;
