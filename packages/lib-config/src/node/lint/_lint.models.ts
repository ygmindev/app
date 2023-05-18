import type { ConfigStaticModel } from '@lib/config/core/core.models';
import { TaskParamsModel } from '@tool/task/core/core.models';
import type { Linter } from 'eslint';

export type LintConfigModel = ConfigStaticModel<
  Pick<TaskParamsModel, 'task'> & {
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
