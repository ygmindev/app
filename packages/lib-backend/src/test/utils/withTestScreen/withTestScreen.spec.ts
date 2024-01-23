import { withTestScreen } from '@lib-frontend/test/utils/withTestScreen/withTestScreen';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withTestScreen });

describe(displayName, () => {
  test('works', async () => {
    const result = await withTestScreen({});
    expect(result).toStrictEqual({});
  });
});
