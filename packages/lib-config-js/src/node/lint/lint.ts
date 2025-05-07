import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import { _lint } from '@lib/config/node/lint/_lint';
import { ESLINT_CONFIG_FILENAME } from '@lib/config/node/lint/lint.constants';
import { type _LintConfigModel, type LintConfigModel } from '@lib/config/node/lint/lint.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';

export const lintCommand = (fix?: boolean): string => {
  const { configFilename, exclude, include } = config.params();
  return `eslint --config ${fromDist(configFilename)} ${
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

    include: cartesianString(['packages/*/src/**/*', 'packages/*/tests/**/*'], EXTENSIONS_BASE),

    indentWidth: 2,

    isParenthesis: true,

    isSameLine: true,

    isSingleQuote: true,

    isSpacing: true,

    isTrailingComma: true,

    printWidth: 100,

    unusedIgnore: '^_',
  }),
});

export default config;
