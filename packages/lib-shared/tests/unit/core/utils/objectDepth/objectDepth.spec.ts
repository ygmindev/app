import { objectDepth } from '@lib/shared/core/utils/objectDepth/objectDepth';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ objectDepth });

describe(displayName, () => {
  test('works', async () => {
    expect(objectDepth({})).toStrictEqual(0);
    expect(objectDepth({ a: 'a' })).toStrictEqual(1);
    expect(objectDepth({ a: 'a', b: { b: 'b' } })).toStrictEqual(2);
  });
});
