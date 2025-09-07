import { JwtImplementation } from '@lib/backend/auth/utils/JwtImplementation/JwtImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { objectToEquality } from '@lib/backend/resource/utils/objectToEquality/objectToEquality';
import { RequestContextModel } from '@lib/config/api/api.models';
import { OtpImplementation } from '@lib/model/auth/Otp/OtpImplementation/OtpImplementation';
import { SIGN_IN_TOKEN_CLAIM_KEYS } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { JWT_CLAIM_KEYS } from '@lib/model/auth/SignIn/SignInImplementation/SignInImplementation.constants';
import { type SignInImplementationModel } from '@lib/model/auth/SignIn/SignInImplementation/SignInImplementation.models';
import { SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';
import { UnauthorizedError } from '@lib/shared/auth/errors/UnauthorizedError/UnauthorizedError';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import toString from 'lodash/toString';

@withContainer()
export class SignInImplementation implements SignInImplementationModel {
  @withInject(JwtImplementation) protected jwtImplementation!: JwtImplementation;

  @withInject(OtpImplementation) protected otpImplementation!: OtpImplementation;

  @withInject(UserImplementation) protected userImplementation!: UserImplementation;

  createSignIn = async (user: PartialModel<UserModel> | null | undefined): Promise<SignInModel> => {
    if (user?._id) {
      user._id = toString(user?._id);
      const claims = pick(user, SIGN_IN_TOKEN_CLAIM_KEYS);
      const token = await this.jwtImplementation.createToken(claims);
      return { token, user };
    }
    throw new NotFoundError('user');
  };

  async signIn(input: SignInInputModel): Promise<SignInModel> {
    const { otp } = input;
    if (!otp) {
      throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
    }
    const inputF = cleanObject(pick(input, JWT_CLAIM_KEYS));
    await this.otpImplementation.verify({ ...inputF, otp });
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

  async usernameUpdate(
    input: SignInInputModel,
    context?: RequestContextModel,
  ): Promise<SignInModel> {
    const uid = context?.user?._id;
    if (!uid) {
      throw new UnauthorizedError();
    }

    const { otp } = input;
    if (!otp) {
      throw new HttpError(HTTP_STATUS_CODE.BAD_REQUEST, 'otp');
    }

    const inputF = cleanObject(input);
    const otpVerified = await this.otpImplementation.verify(inputF);

    const { result: user } = await this.userImplementation.update({
      id: uid,
      // filter: filterNil([
      //   { field: '_id', value: uid },
      //   otpVerified.email && { field: 'email', value: otpVerified.email },
      //   otpVerified.phone && { field: 'phone', value: otpVerified.phone },
      //   otpVerified.callingCode && { field: 'callingCode', value: otpVerified.callingCode },
      // ]),
      update: inputF,
    });
    const signIn = await this.createSignIn(user);
    return signIn;
  }

  async verifyToken(input: string): Promise<SignInModel> {
    const signInToken = await this.jwtImplementation.verifyToken(input);
    if (signInToken) {
      const inputF = cleanObject(pick(signInToken, JWT_CLAIM_KEYS));
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
    throw new UnauthorizedError();
  }

  // async userUpdate(input: SignInInputModel): Promise<SignInModel> {
  //   const result = await this.userImplementation.update(input);
  //   if (result?.result) {
  //     const signIn = await this.createSignIn(result.result);
  //     return signIn;
  //   }
  //   throw new HttpError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
  // }
}
