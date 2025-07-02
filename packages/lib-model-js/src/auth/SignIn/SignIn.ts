import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SIGN_IN_RESOURCE_NAME } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { User } from '@lib/model/user/User/User';
import { type UserModel } from '@lib/model/user/User/User.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: SIGN_IN_RESOURCE_NAME })
export class SignIn extends EntityResource implements SignInModel {
  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isNew?: boolean;

  @withField({ type: DATA_TYPE.STRING })
  token!: string;

  @withField({ Resource: () => User, type: PROPERTY_TYPE.RESOURCE })
  user!: RefModel<UserModel>;
}
