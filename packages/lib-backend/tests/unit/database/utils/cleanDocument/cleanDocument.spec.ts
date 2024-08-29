import { cleanDocument } from '@lib/backend/database/utils/cleanDocument/cleanDocument';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { randomString } from '@lib/shared/crypto/utils/randomString/randomString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { ObjectId } from 'mongodb';

const { displayName } = withTest({ cleanDocument });

describe(displayName, () => {
  const VALUE: Record<string, unknown> = {
    _id: randomString(24),
    _objectId: new ObjectId(),
    a: 'a',
    b: 1,
    c: null,
    d: undefined,
  };

  test('works', async () => {
    const result = cleanDocument(VALUE);
    expect(result).toEqual({
      ...pick(VALUE, ['a', 'b', 'c', '_objectId']),
      _id: new ObjectId(VALUE._id as string),
    });
  });
});
