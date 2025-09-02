import { getLazy } from '@lib/shared/core/utils/getLazy/getLazy';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getLazy });

describe(displayName, () => {
  test('works', async () => {
    const result = await getLazy({});
    expect(result).toStrictEqual({});
  });
});
