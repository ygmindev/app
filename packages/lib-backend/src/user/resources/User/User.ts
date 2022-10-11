import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isRepository: true, name: USER_RESOURCE_NAME })
export class User extends EntityResource implements UserModel {
  @withField({ isOptional: true, isRepository: true, isUnique: true })
  email?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true })
  phone?: string;

  @withField({ isOptional: true, isRepository: true })
  first?: string;

  @withField({ isOptional: true, isRepository: true })
  last?: string;
}
