import { OtpService } from '@lib/backend/auth/resources/Otp/OtpService/OtpService';
import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { mail } from '@lib/backend/mail/utils/mail/mail';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';
import { vi } from 'vitest';

const { displayName } = withTest({ target: () => OtpService });

const mailer = { mail };

describe(displayName, () => {
  const database = Container.get(DatabaseMain);
  const otpService = Container.get(OtpService);

  afterEach(async () => {
    const repository = database.getRepository({ name: OTP_RESOURCE_NAME });
    await repository.clear();
  });

  test('create by email', async () => {
    const sendSpy = vi.spyOn(mailer, 'mail');
    await otpService.create({ form: { email: USER_FIXTURE.email } });
    const { result } = await otpService.getMany({ filter: { email: USER_FIXTURE.email } });
    expect(sendSpy).toBeCalledTimes(1);
    expect(result && result.length).toEqual(1);
    expect(result && result[0].otp).toBeTruthy();
  });

  test('verify by email', async () => {
    const { result: created } = await otpService.create({ form: { email: USER_FIXTURE.email } });
    const verified =
      created && (await otpService.verify({ email: created.email, otp: created.otp }));
    const { result } = await otpService.getMany({ filter: { email: USER_FIXTURE.email } });
    expect(verified).toStrictEqual(true);
    expect(result && result.length).toEqual(0);
  });
});
