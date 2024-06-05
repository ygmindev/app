import { initialize } from '@backend/lambda/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ initialize });

describe(displayName, () => {
  test('works', async () => {
    await initialize({ database: databaseConfig.params() });
    expect(result).toStrictEqual({});
  });
});
