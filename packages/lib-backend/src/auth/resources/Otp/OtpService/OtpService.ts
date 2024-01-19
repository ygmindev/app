import { Otp } from '@lib/backend/auth/resources/Otp/Otp';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { mail } from '@lib/backend/notification/utils/mail/mail';
import { sms } from '@lib/backend/notification/utils/sms/sms';
import { createEntityResourceService } from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { objectToEquality } from '@lib/backend/resource/utils/objectToEquality/objectToEquality';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { type OtpServiceModel } from '@lib/shared/auth/resources/Otp/OtpService/OtpService.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import toNumber from 'lodash/toNumber';

@withContainer()
export class OtpService
  extends createEntityResourceService<OtpModel, OtpFormModel>({
    Resource: Otp,
    afterCreate: async ({ output }) => {
      if (output.result) {
        // phone verification
        if (output.result.phone && output.result.callingCode) {
          await sms<{ otp: string }>({
            from: process.env.SERVER_TWILIO_FROM,
            params: { otp: output.result.otp },
            pathname: fromStatic('templates/otp/sms.ejs'),
            to: `+${output.result.callingCode}${output.result.phone}`,
          });
        }
        // email verification
        if (output.result.email) {
          await mail<{ otp: string }>({
            from: process.env.SERVER_EMAIL_USERNAME,
            params: { otp: output.result.otp },
            template: 'otp',
            to: [output.result.email],
          });
        }
      }
      return output;
    },

    beforeCreate: async ({ input }) => {
      const { checkExists, ...formF } = input.form;
      if (checkExists) {
        const userService = Container.get(UserService);
        const { result } = await userService.get({
          filter: objectToEquality(cleanObject(pick(formF, ['callingCode', 'email', 'phone']))),
          options: { project: { _id: true } },
        });
        if (result) {
          throw new DuplicateError(result._id);
        }
      }
      const otpService = Container.get(OtpService);
      await otpService.remove({ filter: objectToEquality(formF) });
      input.form.otp =
        process.env.SERVER_OTP_STATIC ??
        randomInt(toNumber(process.env.SERVER_APP_OTP_LENGTH)).toString();
      return input;
    },

    name: OTP_RESOURCE_NAME,
  })
  implements OtpServiceModel
{
  async verify(data: EntityResourceDataModel<OtpModel>): Promise<OtpModel> {
    const filter = objectToEquality(data);
    const { result } = await this.get({ filter, options: { project: { otp: true } } });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await super.remove({ filter });
    return result;
  }
}
