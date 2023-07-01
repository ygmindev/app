import { type Linter } from 'eslint';

import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type LintConfigOptionsModel = EmptyObjectModel;

export type LintConfigModel = ConfigDynamicModel<
  {
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
  },
  LintConfigOptionsModel
>;

export type _LintConfigModel = ConfigDynamicModel<Linter.Config, LintConfigOptionsModel>;
