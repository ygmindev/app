import { OtpService } from '#lib-backend/auth/resources/Otp/OtpService/OtpService';
import { JwtService } from '#lib-backend/auth/utils/JwtService/JwtService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { objectToEquality } from '#lib-backend/resource/utils/objectToEquality/objectToEquality';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import { UnauthorizedError } from '#lib-shared/auth/errors/UnauthorizedError/UnauthorizedError';
import {
  SIGN_IN_RESOURCE_NAME,
  SIGN_IN_TOKEN_CLAIM_KEYS,
} from '#lib-shared/auth/resources/SignIn/SignIn.constants';
import {
  type SignInFormModel,
  type SignInModel,
} from '#lib-shared/auth/resources/SignIn/SignIn.models';
import { type SignInServiceModel } from '#lib-shared/auth/resources/SignIn/SignInService/SignInService.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { pick, pick } from '#lib-shared/core/utils/pick/pick';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

@withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Service` })
export class SignInService implements SignInServiceModel {
  @withInject(UserService) protected _userService!: UserService;

  @withInject(OtpService) protected _otpService!: OtpService;

  @withInject(JwtService) protected _jwtService!: JwtService;

  createSignIn = async (user: UserModel | null | undefined): Promise<SignInModel> => {
    if (user) {
      const claims = pick(user, SIGN_IN_TOKEN_CLAIM_KEYS);
      const token = await this._jwtService.createToken(user._id, claims);
      return { token, user };
    }
    return {};
  };

  async create({
    form,
  }: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>): Promise<
    OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>
  > {
    if (form.otp) {
      const formF = cleanObject(pick(form, ['callingCode', 'email', 'phone']));
      await this._otpService.verify({ ...formF, otp: form.otp });
      delete (formF as Partial<SignInFormModel>).otp;
      let { result: user } = await this._userService.get({
        filter: objectToEquality<UserModel>(formF),
      });
      let isNew;
      if (!user) {
        const { result: created } = await this._userService.create({ form: formF });
        user = created;
        isNew = true;
      }
      const signIn = await this.createSignIn(user);
      return { result: { ...signIn, isNew } };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
  }

  async userUpdate(
    input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel>,
    _context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    const result = await this._userService.update(input);
    if (result?.result) {
      const signIn = await this.createSignIn(result.result);
      return { result: signIn };
    }
    throw new HttpError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
  }

  async usernameUpdate(
    { form }: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
    if (form.otp) {
      const formF = cleanObject(form);
      const otp = await this._otpService.verify(formF);
      const { result: user } = await this._userService.update({
        filter: filterNil([
          context?.user && { field: '_id', value: context.user._id },
          otp.email && { field: 'email', value: otp.email },
          otp.phone && { field: 'phone', value: otp.phone },
          otp.callingCode && { field: 'callingCode', value: otp.callingCode },
        ]),
        update: formF,
      });
      if (user) {
        const signIn = await this.createSignIn(user);
        return { result: signIn };
      }
      throw new UnauthorizedError();
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
  }
}
