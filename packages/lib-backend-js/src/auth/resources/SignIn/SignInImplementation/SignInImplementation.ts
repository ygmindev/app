import { OtpImplementation } from '@lib/backend/auth/resources/Otp/OtpImplementation/OtpImplementation';
import { JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { objectToEquality } from '@lib/backend/resource/utils/objectToEquality/objectToEquality';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import {
  SIGN_IN_RESOURCE_NAME,
  SIGN_IN_TOKEN_CLAIM_KEYS,
} from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type SignInImplementationModel } from '@lib/shared/auth/resources/SignIn/SignInImplementation/SignInImplementation.models';
import { SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer({ name: `${SIGN_IN_RESOURCE_NAME}Implementation` })
export class SignInImplementation implements SignInImplementationModel {
  @withInject(UserImplementation) protected userImplementation!: UserImplementation;

  @withInject(OtpImplementation) protected otpImplementation!: OtpImplementation;

  @withInject(JwtImplementation) protected jwtImplementation!: JwtImplementation;

  createSignIn = async (user: PartialModel<UserModel> | null | undefined): Promise<SignInModel> => {
    if (user?._id) {
      const claims = pick(user, SIGN_IN_TOKEN_CLAIM_KEYS);
      const token = await this.jwtImplementation.createToken(user._id, claims);
      return { token, user };
    }
    throw new NotFoundError('user');
  };

  async signIn(input: SignInInputModel): Promise<SignInModel> {
    if (input?.otp) {
      const inputF = cleanObject(pick(input, ['callingCode', 'email', 'phone']));
      await this.otpImplementation.verify({ ...inputF, otp: input.otp });
      let { result: user } = await this.userImplementation.get({
        filter: objectToEquality(inputF),
      });
      let isNew;
      if (!user) {
        const { result: created } = await this.userImplementation.create({ form: inputF });
        user = created;
        isNew = true;
      }
      const signIn = await this.createSignIn(user);
      return { ...signIn, isNew };
    }
    throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
  }

  // async userUpdate(
  //   input: InputModel<UserModel, UserFormModel, RESOURCE_METHOD_TYPE.UPDATE> = {},
  //   _context?: RequestContextModel,
  // ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
  //   const result = await this.userImplementation.update(input);
  //   if (result?.result) {
  //     const signIn = await this.createSignIn(result.result);
  //     return { result: signIn };
  //   }
  //   throw new HttpError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
  // }

  // @withAccess({ access: ACCESS_LEVEL.PROTECTED })
  // async usernameUpdate(
  //   { form }: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel, SignInFormModel> = {},
  //   context?: RequestContextModel,
  // ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
  //   if (form?.otp) {
  //     const formF = cleanObject(form);
  //     const otp = await this.otpImplementation.verify(formF);
  //     const { result: user } = await this.userImplementation.update({
  //       filter: filterNil([
  //         context?.user?._id && { field: '_id', value: context.user._id },
  //         otp.email && { field: 'email', value: otp.email },
  //         otp.phone && { field: 'phone', value: otp.phone },
  //         otp.callingCode && { field: 'callingCode', value: otp.callingCode },
  //       ]),
  //       update: formF,
  //     });
  //     if (user) {
  //       const signIn = await this.createSignIn(user);
  //       return { result: signIn };
  //     }
  //     throw new UnauthorizedError();
  //   }
  //   throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
  // }
}
