import { currentTimezone } from '@lib/frontend/locale/utils/currentTimezone/currentTimezone';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ currentTimezone });

describe(displayName, () => {
  test('works', async () => {
    const result = await currentTimezone({});
    expect(result).toStrictEqual({});
  });
});
