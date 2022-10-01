import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withEntity });

describe(displayName, () => {
  test('throws with missing name', async () => {
    expect(() => withEntity({})).toThrowError(NotFoundError);
    expect(() => withEntity({ isAbstract: true })).not.toThrowError(NotFoundError);
  });
});
