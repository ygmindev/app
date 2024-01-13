import { fromDist } from '@lib-backend/file/utils/fromDist/fromDist';
import { fromExecutable } from '@lib-backend/file/utils/fromExecutable/fromExecutable';
import { fromPackages } from '@lib-backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib-backend/file/utils/fromWorking/fromWorking';
import { packages } from '@lib-backend/file/utils/packages/packages';
import { defineConfig } from '@lib-config/core/utils/defineConfig/defineConfig';
import { _lint } from '@lib-config/node/lint/_lint';
import { type LintConfigModel } from '@lib-config/node/lint/lint.models';
import { TEST_CONFIG } from '@lib-config/node/test/test.constants';
import { EXTENSIONS_BASE } from '@lib-platform/core/utils/extensions/extensions.constants';
import { permuteString } from '@lib-shared/core/utils/permuteString/permuteString';

export const lintCommand = (fix?: boolean): string =>
  fromExecutable(
    `eslint --config ${config.configFile} ${
      fix ? '--fix' : ''
    } --no-error-on-unmatched-pattern ${config.exclude
      .map((pattern) => `--ignore-pattern "${pattern}"`)
      .join(' ')} ${config.include.join(' ')}`,
  );

const { _config, config } = defineConfig({
  _config: _lint,

  config: {
    configFile: fromDist('.eslintrc.json'),

    exclude: [`**/*.${TEST_CONFIG.specExtension}.*`, `**/*.${TEST_CONFIG.eteExtension}.*`],

    extensions: EXTENSIONS_BASE,

    include: permuteString([fromWorking('src/**/*')], EXTENSIONS_BASE),

    indentWidth: 2,

    isParenthesis: true,

    isSameLine: true,

    isSingleQuote: true,

    isSpacing: true,

    isTrailingComma: true,

    printWidth: 100,

    roots: [fromRoot(), ...packages.map((pkg) => fromPackages(pkg))],

    unusedIgnore: '^_',
  } satisfies LintConfigModel,
});

export { _config, config };
