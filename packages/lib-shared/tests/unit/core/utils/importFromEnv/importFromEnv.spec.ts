jest.mock('fs');

import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ importFromEnv });

describe(displayName, () => {
  const PROCESS_ENV = process.env;
  const FILENAME = 'test';
  const CONTENT = 'TEST';

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...PROCESS_ENV };
  });

  test('works', async () => {
    const platforms = Object.keys(PLATFORM);
    platforms.forEach((platform) =>
      writeFile({
        filename: fromRoot(`${FILENAME}.${platform}.ts`),
        value: `${CONTENT}.${platform}`,
      }),
    );

    for (const platform of platforms) {
      const result = await importFromEnv(fromRoot(`${FILENAME}.${platform}.ts`));
      expect(result).toStrictEqual(`${CONTENT}.${platform}`);
    }
  });
});
