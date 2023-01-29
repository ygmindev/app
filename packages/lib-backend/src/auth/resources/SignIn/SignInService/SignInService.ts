import { OtpService } from '@lib/backend/auth/resources/Otp/OtpService/OtpService';
import { SIGN_IN_TOKEN_CLAIM_FIELDS } from '@lib/backend/auth/resources/SignIn/SignIn.constants';
import { JwtService } from '@lib/backend/auth/utils/JwtService/JwtService';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import { SIGN_IN_RESOURCE_NAME } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import type { SignInServiceModel } from '@lib/shared/auth/resources/SignIn/SignInService/SignInService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ContextModel } from '@lib/shared/resource/utils/Context/Context.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
import pick from 'lodash/pick';

const _createSignIn = async (user: UserModel | null | undefined): Promise<SignInModel> => {
  if (user) {
    const claims = pick(user, SIGN_IN_TOKEN_CLAIM_FIELDS);
    const token = await JwtService.createToken(user._id, claims);
    return { token, user };
  }
  return {};
};

@withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
export class SignInService implements SignInServiceModel {
  @withInject(UserService) protected _userService!: UserService;

  @withInject(OtpService) protected _otpService!: OtpService;

  async create({
    form,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>
  > {
    if (form.username && form.otp) {
      await this._otpService.verify({ otp: form.otp, username: form.username });
      delete (form as Partial<SignInFormModel>).otp;

      let { result: user } = await this._userService.get({ filter: { email: form.username } });
      let isNew;
      if (!user) {
        const { result: created } = await this._userService.create({
          form: { email: form.username },
        });
        user = created;
        isNew = true;
      }
      const signIn = await _createSignIn(user);
      return { result: { ...signIn, isNew } };
    }
    throw new HttpError(
      HTTP_STATUS_CODE.BAD_REQUEST,
      Object.keys(form)
        .filter((key) => !(form as Record<string, string>)[key])
        .join(', '),
    );
  }

  async usernameUpdate(
    { form }: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    if (form.username && form.otp) {
      await this._otpService.verify({ otp: form.otp, username: form.username });
      const _id = context?.user?._id;
      const { result: user } = await this._userService.update({
        filter: { _id },
        update: { email: form.username },
      });
      const signIn = await _createSignIn(user);
      return { result: signIn };
    }
    throw new HttpError(
      HTTP_STATUS_CODE.BAD_REQUEST,
      Object.keys(form)
        .filter((key) => !(form as Record<string, string>)[key])
        .join(', '),
    );
  }
}
