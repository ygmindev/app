import { reducer } from '@lib/frontend/state/utils/reducer/reducer';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => reducer });

describe(displayName, () => {
  type StateModel = {
    counter: number;
  };

  test('works', async () => {
    const { actions } = reducer({
      actions: {
        hello: (store, value: number) => {
          store.set('counter', store.get('counter') + value);
        },
      },
      initialState: {
        counter: 1,
      } as StateModel,
    });

    expect(1).toBe(1);
  });
});
