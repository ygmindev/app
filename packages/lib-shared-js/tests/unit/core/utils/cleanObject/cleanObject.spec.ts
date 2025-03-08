import cloneDeep from 'lodash/cloneDeep';

import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.server';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ cleanObject });

describe(displayName, () => {
  const VALUE: Record<string, unknown> = {
    a: 'a',
    b: 1,
    c: null,
    d: undefined,
  };

  test('works', async () => {
    const result = cleanObject(VALUE);
    expect(result).toEqual(pick(VALUE, ['a', 'b', 'c']));
  });

  test('works with nested object', async () => {
    const value = cloneDeep(VALUE);
    value.nestedKey = cloneDeep(value);
    const result = cleanObject(value);
    expect(result.nestedKey).toEqual(pick(value, ['a', 'b', 'c']));
  });
});
