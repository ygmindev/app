import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import type { LintConfigModel } from '@lib/config/node/lint/_lint.models';
import { command } from '@tool/task/core/utils/command/command';

export const lintCommand = (fix?: boolean) => fromExecutable(`eslint --config ${fromConfig(
  'node/lint/_lint.js',
)} ${fix ? '--fix' : ''} --no-error-on-unmatched-pattern src/**/*.{ts,tsx,js,jsx}`);

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

  task: async ({ root, options }) =>
    await command(lintCommand(options?.fix), { root }),

  unusedIgnore: '^_',
};

export default lintConfig;
