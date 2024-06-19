import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getOperationType });

describe(displayName, () => {
  test('works', async () => {
    const result = await getOperationType({});
    expect(result).toStrictEqual({});
  });
});
