import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { template } from '@lib/backend/core/utils/template/template';

const { displayName } = withTest({ target: () => template });

describe(displayName, () => {
  test('works', async () => {
    const result = await template({});
    expect(result).toStrictEqual({});
  });
});
