import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { DataLoader } from '@service/data/core/utils/DataLoader/DataLoader';

const { displayName } = withTest({ DataLoader });

describe(displayName, () => {
  test('works', async () => {
    const result = await DataLoader({});
    expect(result).toStrictEqual({});
  });
});
