import { OtpService } from '@lib/backend/auth/resources/Otp/OtpService/OtpService';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { mail } from '@lib/backend/notification/utils/mail/mail';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

const { displayName } = withTest({ target: () => OtpService });

const mailer = { mail };

describe(displayName, () => {
  const _database = Container.get(Database, DATABASE_TYPE.MONGO);
  const _otpService = Container.get(OtpService);

  afterEach(async () => {
    const repository = _database.getRepository({ name: OTP_RESOURCE_NAME });
    await repository.clear();
  });

  test('create by email', async () => {
    const sendSpy = jest.spyOn(mailer, 'mail');
    await _otpService.create({ form: { email: USER_FIXTURE.email } });
    const { result } = await _otpService.getMany({ filter: { email: USER_FIXTURE.email } });
    expect(sendSpy).toBeCalledTimes(1);
    expect(result && result.length).toEqual(1);
    expect(result && result[0].otp).toBeTruthy();
  });

  test('verify by email', async () => {
    const { result: created } = await _otpService.create({ form: { email: USER_FIXTURE.email } });
    const verified =
      created && (await _otpService.verify({ email: created.email, otp: created.otp }));
    const { result } = await _otpService.getMany({ filter: { email: USER_FIXTURE.email } });
    expect(verified).toStrictEqual(true);
    expect(result && result.length).toEqual(0);
  });
});
