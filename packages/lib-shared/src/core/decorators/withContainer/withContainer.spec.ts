import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withContainer });

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
