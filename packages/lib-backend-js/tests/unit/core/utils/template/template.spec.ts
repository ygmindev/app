import { template } from '@lib/backend/core/utils/template/template';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ template });

describe(displayName, () => {
  test('works', async () => {
    // const result = await template({});
    // expect(result).toStrictEqual({});
    // TODO: test this
    expect(1).toStrictEqual(1);
  });
});
