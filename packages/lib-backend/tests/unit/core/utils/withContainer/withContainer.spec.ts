import { Container } from '@lib/backend/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withContainer });

describe(displayName, () => {
  test('works', async () => {
    @withContainer()
    class A {}
    const a = Container.get(A);
    expect(a.constructor.name).toStrictEqual('A');
  });

  test('works with name', async () => {
    const NAME = 'B';
    @withContainer({ name: NAME })
    class A {}
    const a = Container.get<typeof A>(NAME);
    expect(a.constructor.name).toStrictEqual('A');
  });
});
