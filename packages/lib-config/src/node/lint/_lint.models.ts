import { ConfigStaticModel } from '@lib/config/core/core.models';
import { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import type { Linter } from 'eslint';

export type LintConfigModel = ConfigStaticModel<RunWithConfigStringParamsModel & {
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

export type _LintConfigModel = ConfigStaticModel<Linter.Config>;
