import { embeddedResourceRenderer } from '@lib/frontend/resource/utils/embeddedResourceRenderer/embeddedResourceRenderer';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ embeddedResourceRenderer });

describe(displayName, () => {
  test('works', async () => {
    const result = await embeddedResourceRenderer({});
    expect(result).toStrictEqual({});
  });
});
