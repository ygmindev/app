import { StorageBase } from '@lib/frontend/state/utils/Storage/Storage';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ StorageBase: Storage });

describe(displayName, () => {
  test('works', async () => {
    const result = await StorageBase({});
    expect(result).toStrictEqual({});
  });
});
