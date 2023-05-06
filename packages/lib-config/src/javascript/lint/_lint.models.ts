import type { Linter } from 'eslint';

export interface _LintConfigParamsModel {
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
}

export interface _LintConfigModel extends Linter.Config {}
