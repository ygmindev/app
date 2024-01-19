import { sms } from '@lib/backend/notification/utils/sms/sms';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ sms });

describe(displayName, () => {
  test('works', async () => {
    // const result = await sms({});
    // expect(result).toStrictEqual({});
    // TODO: test this
    expect(1).toStrictEqual(1);
  });
});
