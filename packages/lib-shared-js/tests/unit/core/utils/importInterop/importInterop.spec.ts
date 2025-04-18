import { importInterop } from '@lib/shared/core/utils/importInterop/importInterop';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ importInterop });

describe(displayName, () => {
  test('works', async () => {
    const result = await importInterop({});
    expect(result).toStrictEqual({});
  });
});
