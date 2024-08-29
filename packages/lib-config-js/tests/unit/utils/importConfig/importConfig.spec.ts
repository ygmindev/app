import { importConfig } from '@lib/config/utils/importConfig/importConfig';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ importConfig });

describe(displayName, () => {
  test('works', async () => importConfig(''));
});
