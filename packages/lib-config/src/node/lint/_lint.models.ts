import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import type { Linter } from 'eslint';

export type _LintConfigParamsModel = RunWithConfigStringParamsModel & {
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
};

export interface _LintConfigModel extends Linter.Config {}
