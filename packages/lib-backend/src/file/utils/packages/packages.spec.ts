import { packages } from '@lib/backend/file/utils/packages/packages';
import { FS_FIXTURE } from '@lib/config/node/test/configs/__mocks__/fs/fs.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { keys } from 'lodash';

jest.mock('fs');

const { displayName } = withTest({ target: () => packages });

describe(displayName, () => {
  afterAll(async () => {
    jest.resetAllMocks();
  });

  test('works', async () => {
    expect(packages).toStrictEqual(keys(FS_FIXTURE.packages));
  });
});
