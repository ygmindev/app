import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withTest });

describe(displayName, () => {
  const NAME = jest.fn();
  test('works', async () => {
    const { displayName } = withTest({ target: () => NAME });
    expect(displayName).toStrictEqual('NAME');
  });
});
