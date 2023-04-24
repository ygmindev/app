import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { sms } from '@lib/backend/notification/utils/sms/sms';

const { displayName } = withTest({ target: () => sms });

describe(displayName, () => {
  test('works', async () => {
    const result = await sms({});
    expect(result).toStrictEqual({});
  });
});
