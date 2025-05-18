import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ HttpResponse });

describe(displayName, () => {
  test('works', async () => {
    const result = new HttpResponse();
    expect(result).toStrictEqual({});
  });
});
