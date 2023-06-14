import type { ConfigDynamicModel } from '#lib-config/core/core.models';
import type { Linter } from 'eslint';

export interface LintConfigModel
  extends ConfigDynamicModel<{
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
  }> {}

export interface _LintConfigModel extends ConfigDynamicModel<Linter.Config> {}
