import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SIGN_IN_USER_UPDATE } from '@lib/model/auth/SignIn/SignIn.constants';
import SignIn from '@lib/model/auth/SignIn/SignIn.entity';
import { SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { SignInUserUpdateModel } from '@lib/model/auth/SignIn/SignInUserUpdate/SignInUserUpdate.models';
import User from '@lib/model/user/User/User.entity';
import { UserModel } from '@lib/model/user/User/User.models';

@withEntity({ name: SIGN_IN_USER_UPDATE })
export class SignInUserUpdate implements SignInUserUpdateModel {
  @withField({ Resource: () => User })
  result!: Partial<UserModel>;

  @withField({ Resource: () => SignIn })
  signIn!: SignInModel;
}
