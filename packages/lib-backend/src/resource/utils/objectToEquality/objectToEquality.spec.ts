import { objectToEquality } from '@lib/backend/resource/utils/objectToEquality/objectToEquality';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ objectToEquality });

describe(displayName, () => {
  test('works', async () => {
    const result = await objectToEquality({});
    expect(result).toStrictEqual({});
  });
});
