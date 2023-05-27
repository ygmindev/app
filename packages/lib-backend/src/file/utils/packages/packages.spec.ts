import { packages } from '@lib/backend/file/utils/packages/packages';
import { FS_FIXTURE } from '@lib/config/node/test/__mocks__/fs/fs.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

jest.mock('fs');

const { displayName } = withTest({ packages });

describe(displayName, () => {
  afterAll(async () => {
    jest.clearAllMocks();
  });

  test('works', async () => {
    expect(packages).toStrictEqual(Object.keys(FS_FIXTURE.packages));
  });
});
