import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { User } from '@lib/backend/user/resources/User/User';
import { SIGN_IN_RESOURCE_NAME } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import type { SignInFormModel, SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ name: `${SIGN_IN_RESOURCE_NAME}Form` })
export class SignInForm implements SignInFormModel {
  @withField()
  username!: string;

  @withField()
  otp!: string;
}

@withEntity({ isRepository: true, name: SIGN_IN_RESOURCE_NAME })
export class SignIn extends EntityResource implements SignInModel {
  @withField({ Resource: User })
  user!: UserModel;

  @withField()
  token!: string;

  @withField({ isOptional: true, type: FIELD_TYPE.BOOLEAN })
  isNew?: boolean;
}
