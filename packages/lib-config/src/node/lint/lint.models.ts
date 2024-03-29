import { type Linter } from 'eslint';

export type LintConfigModel = {
  configFile: string;

  exclude: Array<string>;

  extensions: Array<string>;

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

export type _LintConfigModel = Linter.Config;
