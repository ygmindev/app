import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type LintConfigModel } from '@lib/config/python/lint/lint.models';
import testConfig from '@lib/config/python/test/test';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { cartesianString } from '@lib/shared/core/utils/cartesianString/cartesianString';

const config = defineConfig<LintConfigModel>({
  params: () => ({
    command: ({ includeDirs }) =>
      cartesianString(
        [
          'poetry run black ',
          'poetry run autoflake --remove-all-unused-imports --quiet --in-place --recursive ',
          'poetry run pylint --output-format=colorized ',
          'poetry run flake8 ',
        ],
        includeDirs,
      ).join(' && '),

    includeDirs: [fromWorking('src'), testConfig.params().testDir],
  }),
});

export default config;
