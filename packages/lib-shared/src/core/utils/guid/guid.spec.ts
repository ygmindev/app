import uniq from 'lodash/uniq';

import { guid } from '@lib/shared/core/utils/guid/guid';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ guid });

describe(displayName, () => {
  const NUM_TRIALS = 1000;

  test('works', async () => {
    let result = Array.from({ length: NUM_TRIALS }, guid);
    result = uniq(result);
    expect(result.length).toStrictEqual(NUM_TRIALS);
  });
});
