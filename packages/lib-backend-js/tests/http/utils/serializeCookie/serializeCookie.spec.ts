import { serializeCookies } from '@lib/backend/http/utils/serializeCookies/serializeCookies';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ serializeCookies });

describe(displayName, () => {
  test('works', async () => {
    const result = await serializeCookies({});
    expect(result).toStrictEqual({});
  });
});
