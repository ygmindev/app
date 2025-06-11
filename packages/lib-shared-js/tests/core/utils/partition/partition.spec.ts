import { partition } from '@lib/shared/core/utils/partition/partition';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ partition });

describe(displayName, () => {
  const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const CONDITION = (v: number): v is number => v % 3 === 0;

  test('works', async () => {
    const [trueValues, falseValues] = partition(VALUES, CONDITION);
    expect(trueValues).toStrictEqual([3, 6, 9]);
    expect(falseValues).toStrictEqual([1, 2, 4, 5, 7, 8]);
  });

  test('works with index', async () => {
    const [[trueValues, falseValues], [trueIndices, falseIndices]] = partition(
      VALUES,
      CONDITION,
      true,
    );

    expect(trueValues).toStrictEqual([3, 6, 9]);
    expect(falseValues).toStrictEqual([1, 2, 4, 5, 7, 8]);

    expect(trueIndices).toStrictEqual([2, 5, 8]);
    expect(falseIndices).toStrictEqual([0, 1, 3, 4, 6, 7]);
  });
});
