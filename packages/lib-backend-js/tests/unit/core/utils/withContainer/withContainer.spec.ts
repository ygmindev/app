import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withContainer });

describe(displayName, () => {
  test('works', async () => {
    @withContainer()
    class A {}
    const a = Container.get(A);
    expect(a.constructor.name).toStrictEqual('A');
  });
});
