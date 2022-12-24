export interface _LintConfigParamsModel {
  include: Array<string>;
  indentWidth: number;
  isNoUnused?: boolean;
  isParenthesis?: boolean;
  isSameLine?: boolean;
  isSingleQuote?: boolean;
  isSpacing?: boolean;
  isTrailingComma?: boolean;
  printWidth: number;
  roots: Array<string>;
}
