import type { ConfigStaticModel, RunWithConfigParamsModel } from '@lib/config/core/core.models';
import type { Linter } from 'eslint';

export type LintConfigModel = ConfigStaticModel<
  RunWithConfigParamsModel & {
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
>;

export type _LintConfigModel = ConfigStaticModel<Linter.Config>;
