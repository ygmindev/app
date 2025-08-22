import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SIGN_IN_RESOURCE_NAME } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';

@withEntity({ isDatabase: true, name: SIGN_IN_RESOURCE_NAME })
export class SignIn extends EntityResource implements SignInModel {
  @withField({ isOptional: true })
  isNew?: boolean;

  @withField()
  token!: string;

  @withField({ Resource: () => User })
  user!: RefModel<UserModel>;
}

export default SignIn;
