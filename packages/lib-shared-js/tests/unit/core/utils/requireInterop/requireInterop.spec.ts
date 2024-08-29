import { requireInterop } from '@lib/shared/core/utils/requireInterop/requireInterop';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ requireInterop });

describe(displayName, () => {
  test('works', async () => {
    const result = await requireInterop({});
    expect(result).toStrictEqual({});
  });
});
