import { withCondition } from '@lib/shared/core/decorators/withCondition/withCondition';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withCondition });

describe(displayName, () => {
  const fn = jest.fn();

  class A {
    test(): void {
      return;
    }
  }

  test('works', async () => {
    const decorator: ClassDecorator = (Base) => {
      const _test = Base.prototype.test;
      Base.prototype.test = () => {
        fn();
        return _test.apply(this);
      };
    };

    @withCondition(false, decorator)
    class B extends A {}

    @withCondition(true, decorator)
    class C extends A {}

    new B().test();
    expect(fn).toHaveBeenCalledTimes(0);

    new C().test();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
