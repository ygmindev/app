import { mail } from '@lib/backend/mail/utils/mail/mail';
import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { InvalidOtpError } from '@lib/shared/auth/errors/InvalidOtpError/InvalidOtpError';
import { OTP_LENGTH, OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { OtpServiceModel } from '@lib/shared/auth/resources/Otp/OtpService/OtpService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

const SERVER_EMAIL_USERNAME = getEnv('SERVER_EMAIL_USERNAME');

@withContainer()
export class OtpService
  extends EntityResourceService<OtpModel, OtpFormModel>({
    afterCreate: async ({ output }) => {
      output.result &&
        mail<{ otp: string }>({
          from: SERVER_EMAIL_USERNAME,
          params: { otp: output.result.otp },
          template: 'otp',
          to: [output.result.username],
        });
      return output;
    },

    beforeCreate: async ({ input }) => {
      const service = Container.get(OtpService);
      await service.remove({ filter: { username: input.form.username } });
      input.form.otp = randomInt(OTP_LENGTH).toString();
      return input;
    },

    name: OTP_RESOURCE_NAME,
  })
  implements OtpServiceModel
{
  @withInject(UserService) protected _userService!: UserService;

  async createIfNotExists({
    form,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel, OtpFormModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel>
  > {
    const { result } = await this._userService.get({
      filter: { email: form.username },
      options: { project: { _id: true } },
    });
    if (result) {
      throw new DuplicateError(result._id);
    }
    return this.create({ form });
  }

  async verify(data: EntityResourceDataModel<OtpModel>): Promise<boolean> {
    const { result } = await this.get({
      filter: { username: data.username },
      options: { project: { _id: true } },
    });
    if (!result || result.otp !== data.otp) {
      throw new InvalidOtpError();
    }
    await this.remove({ filter: { username: data.username } });
    return true;
  }
}
