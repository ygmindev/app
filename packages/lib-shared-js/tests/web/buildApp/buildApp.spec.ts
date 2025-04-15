import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { buildApp } from '@lib/shared/web/utils/buildApp/buildApp';

const { displayName } = withTest({ buildApp });

describe(displayName, () => {
  test('works', async () => {
    const result = await buildApp({});
    expect(result).toStrictEqual({});
  });
});
