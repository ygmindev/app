import { sort } from '@lib/shared/core/utils/sort/sort';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sort });

describe(displayName, () => {
  test('works', async () => {
    const result = sort([2, 3, 1]);
    expect(result).toStrictEqual([1, 2, 3]);
  });

  test('works ascending', async () => {
    const result = sort(
      [
        { a: 2, b: 2 },
        { a: 3, b: 1 },
        { a: 1, b: 3 },
      ],
      ['a'],
    );
    expect(result).toStrictEqual([
      { a: 1, b: 3 },
      { a: 2, b: 2 },
      { a: 3, b: 1 },
    ]);
  });

  test('works descending', async () => {
    const result = sort(
      [
        { a: 2, b: 2 },
        { a: 3, b: 1 },
        { a: 1, b: 3 },
      ],
      [['a', false]],
    );
    expect(result).toStrictEqual([
      { a: 3, b: 1 },
      { a: 2, b: 2 },
      { a: 1, b: 3 },
    ]);
  });

  test('works multiple', async () => {
    const result = sort(
      [
        { a: 3, b: 1 },
        { a: 3, b: 2 },
        { a: 2, b: 1 },
        { a: 2, b: 2 },
        { a: 1, b: 1 },
        { a: 1, b: 2 },
      ],
      [
        ['a', true],
        ['b', false],
      ],
    );

    expect(result).toStrictEqual([
      { a: 1, b: 2 },
      { a: 1, b: 1 },
      { a: 2, b: 2 },
      { a: 2, b: 1 },
      { a: 3, b: 2 },
      { a: 3, b: 1 },
    ]);

    expect(result).toStrictEqual([
      { a: 1, b: 2 },
      { a: 1, b: 1 },
      { a: 2, b: 2 },
      { a: 2, b: 1 },
      { a: 3, b: 2 },
      { a: 3, b: 1 },
    ]);
  });
});
