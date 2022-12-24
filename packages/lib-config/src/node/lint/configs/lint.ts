import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { LintConfigParamsModel } from '@lib/config/node/lint/lint.models';

export const lintConfig: LintConfigParamsModel = {
  include: ['src/**/*', 'tasks.ts'],

  indentWidth: 2,

  isNoUnused: true,

  isParenthesis: true,

  isSameLine: true,

  isSingleQuote: true,

  isSpacing: true,

  isTrailingComma: true,

  printWidth: 100,

  roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))],
};
