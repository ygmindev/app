import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { EmailClient } from '@lib/backend/notification/utils/EmailClient/EmailClient';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { OtpImplementation } from '@lib/model/auth/Otp/OtpImplementation/OtpImplementation';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ OtpImplementation });

const emailClient = new EmailClient();

describe(displayName, () => {
  const database = Container.get(Database, DATABASE_TYPE.MONGO);
  const otpImplementation = Container.get(OtpImplementation);

  afterEach(async () => {
    const repository = database.getRepository({ name: OTP_RESOURCE_NAME });
    await repository.clear();
  });

  test('create by email', async () => {
    const sendSpy = jest.spyOn(emailClient, 'send');
    await otpImplementation.create({ form: { email: USER_FIXTURE.email } });
    const { result } = await otpImplementation.getMany({
      filter: [{ field: 'email', value: USER_FIXTURE.email }],
    });
    expect(sendSpy).toBeCalledTimes(1);
    expect(result && result.length).toEqual(1);
    expect(result && result[0].otp).toBeTruthy();
  });

  test('verify by email', async () => {
    const { result: created } = await otpImplementation.create({
      form: { email: USER_FIXTURE.email },
    });
    const verified =
      created && (await otpImplementation.verify({ email: created.email, otp: created.otp }));
    const { result } = await otpImplementation.getMany({
      filter: [{ field: 'email', value: USER_FIXTURE.email }],
    });
    expect(verified).toStrictEqual(true);
    expect(result && result.length).toEqual(0);
  });
});
