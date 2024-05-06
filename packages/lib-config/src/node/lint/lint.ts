import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _lint } from '@lib/config/node/lint/_lint';
import { type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { EXTENSIONS_BASE } from '@lib/platform/core/utils/extensions/extensions.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const lintCommand = (fix?: boolean): string =>
  `npx eslint --config ${config.configFile} ${
    fix ? '--fix' : ''
  } --no-error-on-unmatched-pattern ${config.exclude
    .map((pattern) => `--ignore-pattern "${pattern}"`)
    .join(' ')} ${config.include.join(' ')}`;

const { _config, config } = defineConfig({
  _config: _lint,

  config: {
    configFile: fromDist('.eslintrc.json'),

    // exclude: [`**/*${TEST_CONFIG.specExtension}.*`, `**/*${TEST_CONFIG.eteExtension}.*`],
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

    roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))].map((to) =>
      toRelative({ from: fromDist(), to }),
    ),

    unusedIgnore: '^_',
  } satisfies LintConfigModel,
});

export { _config, config };
