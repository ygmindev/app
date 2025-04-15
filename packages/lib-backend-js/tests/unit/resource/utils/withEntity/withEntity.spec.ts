import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withEntity });

describe(displayName, () => {
  test('throws with missing name', async () => {
    expect(() => withEntity({})).toThrow(NotFoundError);
    expect(() => withEntity({ isAbstract: true })).not.toThrow(NotFoundError);
  });
});
