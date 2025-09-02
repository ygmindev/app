import { expectEqualsTestableResource } from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ expectEqualsTestableResource });

describe(displayName, () => {
  test('works', async () => {
    const result = await expectEqualsTestableResource({});
    expect(result).toStrictEqual({});
  });
});
