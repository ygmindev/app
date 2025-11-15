import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { EmailClient } from '@lib/backend/notification/utils/EmailClient/EmailClient';
import { SmsClient } from '@lib/backend/notification/utils/SmsClient/SmsClient';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { objectToEquality } from '@lib/backend/resource/utils/objectToEquality/objectToEquality';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { Otp } from '@lib/model/auth/Otp/Otp.entity';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { type OtpImplementationModel } from '@lib/model/auth/Otp/OtpImplementation/OtpImplementation.models';
// import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { PartialModel } from '@lib/shared/core/core.models';
// import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
// import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { Container } from '@lib/shared/core/utils/Container/Container';
// import { pick } from '@lib/shared/core/utils/pick/pick';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { EntityResourceDataModel } from '@lib/shared/resource/resource.models';
import toNumber from 'lodash/toNumber';

@withContainer()
export class OtpImplementation
  extends createEntityResourceImplementation<OtpModel>({
    Resource: Otp,
    afterCreate: async ({ output }) => {
      if (output.result?.otp) {
        const environment = Container.get(Environment);

        // phone verification
        if (output.result.phone && output.result.callingCode) {
          await Container.get(SmsClient).send<{ otp: string }>({
            body: {
              params: { otp: output.result.otp },
              pathname: fromStatic('templates/otp/sms.ejs'),
            },
            from: environment.variables.SERVER_TWILIO_FROM ?? '',
            to: `+${output.result.callingCode}${output.result.phone}`,
          });
        }
        // email verification
        if (output.result.email) {
          const emailClient = Container.get(EmailClient);
          await emailClient.send<{ otp: string }>({
            from: environment.variables.SERVER_EMAIL_USERNAME ?? '',
            params: { otp: output.result.otp },
            template: 'otp',
            to: [output.result.email],
          });
        }
      }
      return output;
    },

    beforeCreate: async ({ input }) => {
      const environment = Container.get(Environment);

      // const { isCheckExists, ...formF } = input?.form ?? {};
      const { ...formF } = input?.form ?? {};
      // if (isCheckExists) {
      //   const userImplementation = Container.get(UserImplementation);
      //   const { result } = await userImplementation.get({
      //     filter: objectToEquality(cleanObject(pick(formF, ['callingCode', 'email', 'phone']))),
      //   });
      //   if (result) {
      //     throw new DuplicateError(result._id);
      //   }
      // }
      const otpImplementation = Container.get(OtpImplementation);
      await otpImplementation.remove({ filter: objectToEquality(formF) });
      input?.form &&
        (input.form.otp =
          environment.variables.SERVER_OTP_STATIC ??
          randomInt(toNumber(environment.variables.SERVER_APP_OTP_LENGTH)).toString());
      return input;
    },

    name: OTP_RESOURCE_NAME,
  })
  implements OtpImplementationModel
{
  async verify(data: EntityResourceDataModel<OtpModel>): Promise<PartialModel<OtpModel>> {
    const filter = objectToEquality(data);
    const { result } = await this.get({ filter });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await super.remove({ filter });
    return result;
  }
}
