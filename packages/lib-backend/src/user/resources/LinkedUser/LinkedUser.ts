import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { LINKED_USER_RESOURCE_NAME } from '#lib-shared/user/resources/LinkedUser/LinkedUser.constants';
import {
  type LinkedUserModel,
  type LinkedUserTypeModel,
} from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';

@withEntity({
  isEmbedded: true,
  isRepository: true,
  name: LINKED_USER_RESOURCE_NAME,
})
export class LinkedUser extends EmbeddedResource implements LinkedUserModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  type!: LinkedUserTypeModel;
}
