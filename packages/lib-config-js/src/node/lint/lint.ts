import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import fileConfig from '@lib/config/file/file';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import { _lint } from '@lib/config/node/lint/_lint';
import { ESLINT_CONFIG_FILENAME } from '@lib/config/node/lint/lint.constants';
import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';

export const lintCommand = (fix?: boolean): string => {
  const { configFilename, exclude, include } = config.params();
  return `npx eslint --config ${fromDist(configFilename)} ${
    fix ? '--fix' : ''
  } --no-error-on-unmatched-pattern ${exclude
    .map((pattern) => `--ignore-pattern "${pattern}"`)
    .join(' ')} ${include.join(' ')}`;
};

export const config = defineConfig<LintConfigModel, _LintConfigModel>({
  config: _lint,

  params: () => ({
    configFilename: ESLINT_CONFIG_FILENAME,

    exclude: ['**/node_modules'],

    include: cartesianString(
      [
        toRelative({ from: fromDist(), to: fromPackages('*/src/**/*') }),
        toRelative({ from: fromDist(), to: fromPackages('*/tests/**/*') }),
      ],
      EXTENSIONS_BASE,
    ),

    indentWidth: 2,

    isParenthesis: true,

    isSameLine: true,

    isSingleQuote: true,

    isSpacing: true,

    isTrailingComma: true,

    printWidth: 100,

    roots: [fromRoot(), ...fileConfig.params().packageDirs.map((pkg) => fromPackages(pkg))].map(
      (to) => toRelative({ from: fromDist(), to }),
    ),

    unusedIgnore: '^_',
  }),
});

export default config;
