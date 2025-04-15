import { createResourceMany } from '@lib/backend/resource/utils/createResourceMany/createResourceMany';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createResourceMany });

describe(displayName, () => {
  test('works', async () => {
    const result = await createResourceMany({});
    expect(result).toStrictEqual({});
  });
});
