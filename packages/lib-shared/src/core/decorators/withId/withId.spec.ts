import { withId } from '@lib/shared/core/decorators/withId/withId';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withId });

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
