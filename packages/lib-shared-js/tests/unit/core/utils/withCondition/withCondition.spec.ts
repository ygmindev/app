import { withCondition } from '@lib/shared/core/utils/withCondition/withCondition';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withCondition });

describe(displayName, () => {
  const fn = jest.fn();

  class A {
    test(): void {
      return;
    }
  }

  test('works', async () => {
    const decorator: ClassDecorator = (Base) => {
      const { test } = Base.prototype;
      Base.prototype.test = () => {
        fn();
        return test.apply(this);
      };
    };

    @withCondition(() => false, () => decorator)
    class B extends A {}

    @withCondition(() => true, () => decorator)
    class C extends A {}

    new B().test();
    expect(fn).toHaveBeenCalledTimes(0);

    new C().test();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
