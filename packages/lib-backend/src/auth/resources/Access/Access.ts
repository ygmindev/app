import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessModel, AccessRoleModel } from '@lib/shared/auth/resources/Access/Access.models';

@withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withField({ isRepository: true, type: FIELD_TYPE.ID })
  _uid!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  role!: AccessRoleModel;

  @withField({})
  email?: string;
}
