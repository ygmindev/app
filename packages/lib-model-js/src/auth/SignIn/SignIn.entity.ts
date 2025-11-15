import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { SIGN_IN_RESOURCE_NAME } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';

@withDatabaseEntity({ name: SIGN_IN_RESOURCE_NAME })
export class SignIn extends EntityResource implements SignInModel {
  @withDatabaseField({ isOptional: true })
  isNew?: boolean;

  @withDatabaseField()
  token!: string;

  @withDatabaseField({ Resource: () => User })
  user!: RefModel<UserModel>;
}

export default SignIn;
