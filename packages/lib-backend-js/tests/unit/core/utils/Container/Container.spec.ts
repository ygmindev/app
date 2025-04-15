import { Container } from '@lib/shared/core/utils/Container/Container';
import {
  WITH_CONTAINER_PROPERTY,
  WithContainerChildFixture,
  WithContainerFixture,
  WithoutContainerFixture,
} from '@lib/shared/core/utils/Container/Container.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Container });

describe(displayName, () => {
  test('works', async () => {
    const result = Container.get(WithContainerFixture);
    expect(result.property).toStrictEqual(WITH_CONTAINER_PROPERTY);
  });

  test('works with constructor', async () => {
    const result = Container.get(WithContainerChildFixture);
    expect(result.parent.property).toStrictEqual(WITH_CONTAINER_PROPERTY);
  });

  test('throws with not injected', async () => {
    expect(() => Container.get(WithoutContainerFixture)).toThrow();
  });

  test('works with set', async () => {
    const PROPERTY = 'PROPERTY';
    class A {
      property = PROPERTY;
    }
    Container.set(A, new A());
    const result = Container.get(A);
    expect(result.property).toStrictEqual(PROPERTY);
  });
});
