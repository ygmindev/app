import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withTest });

describe(displayName, () => {
  const NAME = jest.fn();
  test('works', async () => {
    const { displayName } = withTest({ NAME });
    expect(displayName).toStrictEqual('NAME');
  });
});
