import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TestConfigModel } from '@lib/config/python/test/test.models';
import { Config } from '@lib/config/utils/Config/Config';

export const testConfig = new Config<TestConfigModel>({
  params: () => ({
    command: ({ include, outDir, testDir }) =>
      `PYTHONUNBUFFERED=1 uv run pytest --capture=no --log-cli-level=DEBUG --cov=src --cov-report=html:${outDir}/html ${
        include
          ? include
              .split(',')
              .map((v) => `${testDir}/${v.trim()}`)
              .join(' ')
          : testDir
      }`,

    outDir: fromWorking('.test'),

    testDir: fromWorking('tests'),
  }),
});
