import { packages } from '@lib/backend/file/utils/packages/packages';
import { FS_FIXTURE } from '@lib/config/javascript/test/configs/__mocks__/fs/fs.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

vi.mock('fs');

const { displayName } = withTest({ target: () => packages });

describe(displayName, () => {
  afterAll(async () => {
    vi.clearAllMocks();
  });

  test('works', async () => {
    expect(packages).toStrictEqual(Object.keys(FS_FIXTURE.packages));
  });
});
