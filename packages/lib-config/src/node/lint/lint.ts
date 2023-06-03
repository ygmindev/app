import { fromBuild } from '@lib/backend/file/utils/fromBuild/fromBuild';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { _lint } from '@lib/config/node/lint/_lint';
import type { _LintConfigModel, LintConfigModel } from '@lib/config/node/lint/lint.models';

export const lintCommand = (fix?: boolean): string => {
  const configF = config();
  return fromExecutable(
    `eslint --config ${configF.configFile} ${
      fix ? '--fix' : ''
    } --no-error-on-unmatched-pattern ${configF.include.join(' ')}`,
  );
};

export const config: LintConfigModel = () => ({
  configFile: fromBuild('.eslintrc.json'),

  include: [fromWorking('src/**/*')],

  indentWidth: 2,

  isParenthesis: true,

  isSameLine: true,

  isSingleQuote: true,

  isSpacing: true,

  isTrailingComma: true,

  printWidth: 100,

  roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))],

  unusedIgnore: '^_',
});

export const _config: _LintConfigModel = () => _lint(config());
