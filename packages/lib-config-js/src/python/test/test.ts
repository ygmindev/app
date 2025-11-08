import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TestConfigModel } from '@lib/config/python/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<TestConfigModel>({
  params: () => ({
    command: ({ outDir, testDir }) =>
      `poetry run python -m pytest --capture=no --log-cli-level=DEBUG --cov=src --cov-report=html:${outDir}/html ${testDir}`,

    outDir: fromWorking('.test'),

    testDir: fromWorking('tests'),
  }),
});

export default config;
