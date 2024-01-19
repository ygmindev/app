import uniq from 'lodash/uniq';

import { uid } from '@lib/shared/core/utils/uid/uid';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ uid });

describe(displayName, () => {
  const NUM_TRIALS = 1000;

  test('works', async () => {
    let result = Array.from({ length: NUM_TRIALS }, uid);
    result = uniq(result);
    expect(result.length).toStrictEqual(NUM_TRIALS);
  });
});
