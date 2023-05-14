import { children } from '@lib/backend/file/utils/children/children';
import { FS_FIXTURE } from '@lib/config/node/test/params/__mocks__/fs/fs.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

jest.mock('fs');

const { displayName } = withTest({ children });

describe(displayName, () => {
  afterAll(async () => {
    jest.clearAllMocks();
  });

  test('works', async () => {
    const result = children({ from: 'packages', isDirectory: true }).map(({ name }) => name);
    expect(result).toStrictEqual(Object.keys(FS_FIXTURE.packages));
  });
});
