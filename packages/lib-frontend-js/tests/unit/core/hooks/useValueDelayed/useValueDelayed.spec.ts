import { useValueDelayed } from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ useValueDelayed });

describe(displayName, () => {
  test('works', async () => {
    const result = await useValueDelayed({});
    expect(result).toStrictEqual({});
  });
});
