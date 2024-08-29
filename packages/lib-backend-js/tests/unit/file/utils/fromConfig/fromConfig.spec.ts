import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromConfig });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromConfig(PATH);
    expect(result).toStrictEqual(fromRoot('packages/lib-config-js/src', PATH));
  });
});
