import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { LintConfigModel } from '@lib/config/node/lint/_lint.models';
import { command } from '@tool/task/core/utils/command/command';

const lintConfig: LintConfigModel = {
  include: ['src/**/*', 'tasks.ts'],

  indentWidth: 2,

  isParenthesis: true,

  isSameLine: true,

  isSingleQuote: true,

  isSpacing: true,

  isTrailingComma: true,

  printWidth: 100,

  roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))],

  task: async ({ root }) =>
    await command(
      `eslint --config ${fromConfig(
        'node/lint/_lint.js',
      )} --no-error-on-unmatched-pattern --fix src/**/*.{ts,tsx,js,jsx}`,
      { root },
    ),

  unusedIgnore: '^_',
};

export default lintConfig;
