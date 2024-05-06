import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isEmpty });

describe(displayName, () => {
  test('works', async () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty('test')).toBeFalsy();
    expect(isEmpty(0)).toBeFalsy();
    expect(isEmpty(1)).toBeFalsy();
  });
});
