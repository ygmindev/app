import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TestConfigModel } from '@lib/config/python/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<TestConfigModel>({
  params: () => ({
    command: ({ outputDir, testDir }) =>
      `pwd && poetry run python -m pytest -s --cov=src --cov-report=html:${outputDir}/html ${testDir}`,

    outputDir: fromWorking('.test'),

    testDir: fromWorking('tests'),
  }),
});

export default config;
