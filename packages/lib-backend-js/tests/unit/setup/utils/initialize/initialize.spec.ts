import { databaseConfig } from '@lib/config/database/database.mongo';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { initialize } from '@service/lambda/setup/utils/initialize/initialize';

const { displayName } = withTest({ initialize });

describe(displayName, () => {
  test('works', async () => {
    await initialize({ database: () => databaseConfig.params() });
    expect(result).toStrictEqual({});
  });
});
