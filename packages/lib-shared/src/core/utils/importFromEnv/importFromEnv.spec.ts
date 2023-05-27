jest.mock('fs');

import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { writeFileSync } from 'fs';

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
    const _platforms = Object.keys(PLATFORM);
    _platforms.forEach((platform) =>
      writeFileSync(fromRoot(`${FILENAME}.${platform}.ts`), `${CONTENT}.${platform}`),
    );

    for (const platform of _platforms) {
      const result = await importFromEnv(fromRoot(`${FILENAME}.${platform}.ts`));
      expect(result).toStrictEqual(`${CONTENT}.${platform}`);
    }
  });
});
