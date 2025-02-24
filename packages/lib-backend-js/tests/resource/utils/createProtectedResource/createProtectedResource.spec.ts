import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createProtectedResource });

describe(displayName, () => {
  test('works', async () => {
    const result = await createProtectedResource({});
    expect(result).toStrictEqual({});
  });
});
