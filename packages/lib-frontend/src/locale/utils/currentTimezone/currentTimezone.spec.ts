import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { currentTimezone } from '@lib/frontend/locale/utils/currentTimezone/currentTimezone';

const { displayName } = withTest({ target: () => currentTimezone });

describe(displayName, () => {
  test('works', async () => {
    const result = await currentTimezone({});
    expect(result).toStrictEqual({});
  });
});
