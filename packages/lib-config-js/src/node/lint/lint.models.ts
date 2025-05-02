import { type Linter } from 'eslint';

export type LintConfigModel = {
  configFilename: string;

  exclude: Array<string>;

  include: Array<string>;

  indentWidth: number;

  isParenthesis?: boolean;

  isSameLine?: boolean;

  isSingleQuote?: boolean;

  isSpacing?: boolean;

  isTrailingComma?: boolean;

  printWidth: number;

  unusedIgnore?: string;

  workingDir?: string;
};

export type _LintConfigModel = Linter.FlatConfig;
