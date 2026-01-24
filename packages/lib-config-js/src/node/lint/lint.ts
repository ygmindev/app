import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import { _lint } from '@lib/config/node/lint/_lint';
import { ESLINT_CONFIG_FILENAME } from '@lib/config/node/lint/lint.constants';
import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { Config } from '@lib/config/utils/Config/Config';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';

export const lintConfig = new Config<LintConfigModel, _LintConfigModel>({
  config: _lint,

  params: () => ({
    configFilename: ESLINT_CONFIG_FILENAME,

    exclude: ['**/node_modules', 'generate/templates/**/*'],

    include: cartesianString(['src/**/*', 'tests/**/*'], EXTENSIONS_BASE),

    indentWidth: 2,

    isParenthesis: true,

    isSameLine: true,

    isSingleQuote: true,

    isSpacing: true,

    isTrailingComma: true,

    printWidth: 100,

    unusedIgnore: '^_',

    lintCommand: (config, root, isFix = true) => {
      const { configFilename, exclude, include } = config;
      return `eslint --config ${fromRoot(configFilename)} ${
        isFix ? '--fix' : ''
      } --no-error-on-unmatched-pattern ${exclude
        .map((pattern) => `--ignore-pattern "${pattern}"`)
        .join(' ')} ${include.map((v) => `${root}/${v}`).join(' ')}`;
      },
  }),
});
