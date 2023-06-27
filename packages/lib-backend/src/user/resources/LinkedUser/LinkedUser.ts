import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import type { LinkedUserModel } from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import { LinkedUserTypeModel } from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';

@withEntity({ isEmbedded: true, isRepository: true, name: LINKED_USER_RESOURCE_NAME })
export class LinkedUser extends EmbeddedResource implements LinkedUserModel {
  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  type!: LinkedUserTypeModel;
}
