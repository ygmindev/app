import { children } from '@lib/backend/file/utils/children/children';
import { FS_FIXTURE } from '@lib/config/javascript/test/configs/__mocks__/fs/fs.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { keys } from 'lodash';

jest.mock('fs');

const { displayName } = withTest({ target: () => children });

describe(displayName, () => {
  afterAll(async () => {
    jest.resetAllMocks();
  });

  test('works', async () => {
    const result = children({ from: 'packages', isDirectory: true }).map(({ name }) => name);
    expect(result).toStrictEqual(keys(FS_FIXTURE.packages));
  });
});
