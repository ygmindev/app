import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TestConfigModel } from '@lib/config/python/test/test.models';
import { Config } from '@lib/config/utils/Config/Config';

export const testConfig = new Config<TestConfigModel>({
  params: () => ({
    command: ({ outDir, testDir }) =>
      `poetry run python -m pytest --capture=no --log-cli-level=DEBUG --cov=src --cov-report=html:${outDir}/html ${testDir}`,

    outDir: fromWorking('.test'),

    testDir: fromWorking('tests'),
  }),
});
