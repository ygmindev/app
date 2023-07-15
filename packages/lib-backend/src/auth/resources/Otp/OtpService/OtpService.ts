import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { mail } from '#lib-backend/notification/utils/mail/mail';
import { sms } from '#lib-backend/notification/utils/sms/sms';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { UnauthorizedError } from '#lib-shared/auth/errors/UnauthorizedError/UnauthorizedError';
import {
  OTP_LENGTH,
  OTP_RESOURCE_NAME,
  OTP_STATIC,
} from '#lib-shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import { type OtpServiceModel } from '#lib-shared/auth/resources/Otp/OtpService/OtpService.models';
import { DuplicateError } from '#lib-shared/core/errors/DuplicateError/DuplicateError';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { randomInt } from '#lib-shared/crypto/utils/randomInt/randomInt';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

@withContainer()
export class OtpService
  extends createEntityResourceService<OtpModel, OtpFormModel>({
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
      const service = Container.get(OtpService);
      await service.remove({ filter: cleanObject(input.form) });
      input.form.otp =
        process.env.NODE_ENV === 'test' ? OTP_STATIC : randomInt(OTP_LENGTH).toString();
      return input;
    },

    name: OTP_RESOURCE_NAME,
  })
  implements OtpServiceModel
{
  @withInject(UserService) protected _userService!: UserService;

  async create({
    form,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel, OtpFormModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel>
  > {
    if (form.checkExists) {
      const { result } = await this._userService.get({
        filter: form,
        options: { project: { _id: true } },
      });
      if (result) {
        throw new DuplicateError(result._id);
      }
    }
    return super.create({ form });
  }

  async verify(data: EntityResourceDataModel<OtpModel>): Promise<boolean> {
    const { result } = await this.get({
      filter: data,
      options: { project: { otp: true } },
    });
    if (!result || result.otp !== data.otp) {
      throw new UnauthorizedError();
    }
    await super.remove({ filter: data });
    return true;
  }
}
