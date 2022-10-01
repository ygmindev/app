import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import { randomString } from '@lib/shared/crypto/utils/randomString/randomString';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import { pick } from 'lodash';
import { ObjectId } from 'mongodb';

const { displayName } = withTest({ target: () => cleanDocument });

describe(displayName, () => {
  const VALUE: Record<string, unknown> = {
    _id: randomString(24),
    a: 'a',
    b: 1,
    c: null,
    d: undefined,
  };

  test('works', async () => {
    const result = cleanDocument(VALUE);
    expect(result).toEqual({
      ...pick(VALUE, ['a', 'b', 'c']),
      _id: new ObjectId(VALUE._id as string),
    });
  });
});
