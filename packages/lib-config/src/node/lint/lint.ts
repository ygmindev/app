import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { _lint } from '@lib/config/node/lint/_lint';
import type { _LintConfigModel, LintConfigModel } from '@lib/config/node/lint/lint.models';

export const lintCommand = (fix?: boolean): string =>
  fromExecutable(
    `eslint --config ${config.configFileOutput} ${
      fix ? '--fix' : ''
    } --no-error-on-unmatched-pattern src/**/*.{ts,tsx,js,jsx}`,
  );

export const config: LintConfigModel = {
  configFileInput: fromConfig('node/lint/lint.ts'),

  configFileOutput: fromConfig('node/lint/lint.json'),

  include: ['src/**/*', '*.ts'],

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

export const _config: _LintConfigModel = _lint(config);
