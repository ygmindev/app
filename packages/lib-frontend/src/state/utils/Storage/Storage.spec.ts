import { Storage } from '@lib/frontend/state/utils/Storage/Storage';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Storage });

describe(displayName, () => {
  test('works', async () => {
    const result = await Storage({});
    expect(result).toStrictEqual({});
  });
});
