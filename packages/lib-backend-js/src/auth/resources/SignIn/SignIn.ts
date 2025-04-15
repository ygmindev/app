import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { User } from '@lib/backend/user/resources/User/User';
import { SIGN_IN_RESOURCE_NAME } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isDatabase: true, name: SIGN_IN_RESOURCE_NAME })
export class SignIn extends EntityResource implements SignInModel {
  @withField({ Resource: () => User, type: PROPERTY_TYPE.RESOURCE })
  user!: PartialModel<UserModel>;

  @withField({ type: DATA_TYPE.STRING })
  token!: string;

  @withField({ isOptional: true, type: DATA_TYPE.BOOLEAN })
  isNew?: boolean;
}
