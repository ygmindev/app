import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import fileConfig from '@lib/config/file/file';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import { _lint } from '@lib/config/node/lint/_lint';
import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const lintCommand = (fix?: boolean): string => {
  const { configPath, exclude, include } = config.params();
  return `npx eslint --config ${configPath} ${
    fix ? '--fix' : ''
  } --no-error-on-unmatched-pattern ${exclude
    .map((pattern) => `--ignore-pattern "${pattern}"`)
    .join(' ')} ${include.join(' ')}`;
};

const config = defineConfig<LintConfigModel, _LintConfigModel>({
  config: _lint,

  params: () => ({
    configPath: fromDist('.eslintrc.json'),

    exclude: [],

    include: permuteString(
      [toRelative({ from: fromDist(), to: fromPackages('*/src/**/*') })],
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
