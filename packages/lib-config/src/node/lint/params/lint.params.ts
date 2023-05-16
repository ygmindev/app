import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { _LintConfigParamsModel } from '@lib/config/node/lint/_lint.models';

const lintConfigParams: _LintConfigParamsModel = {
  command: fromExecutable('eslint --no-error-on-unmatched-pattern --fix src/**/*.{ts,tsx,js,jsx}'),

  config: fromConfig('node/lint/configs/lint.config'),

  include: ['src/**/*', 'tasks.ts'],

  indentWidth: 2,

  isParenthesis: true,

  isSameLine: true,

  isSingleQuote: true,

  isSpacing: true,

  isTrailingComma: true,

  printWidth: 100,

  roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))],

  unusedIgnore: '^_',
};

export default lintConfigParams;
