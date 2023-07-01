import { withId } from '#lib-shared/core/utils/withId/withId';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withId });

describe(displayName, () => {
  test('works', async () => {
    const value = [{ key: 'value' }, { id: 'id', key: 'value' }, { key: 'value' }];
    const results = withId(value);
    results.forEach(({ id }, i) => {
      expect(id).toBeTruthy();
      if (i === 1) {
        expect(id).toStrictEqual('id');
      }
    });
  });
});
