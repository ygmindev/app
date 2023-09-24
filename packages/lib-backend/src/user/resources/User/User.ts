import { Access } from '#lib-backend/auth/resources/Access/Access';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { type AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ indices: [['email'], ['phone']], isRepository: true, name: USER_RESOURCE_NAME })
export class User extends EntityResource implements UserModel {
  @withField({
    Resource: () => Access,
    isArray: true,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.ONE_TO_MANY,
    type: PROPERTY_TYPE.RESOURCE,
  })
  access?: Array<AccessModel>;

  // @withField({
  //   Resource: () => Card,
  //   isArray: true,
  //   isOptional: true,
  //   isRepository: true,
  //   type: PROPERTY_TYPE.RESOURCE,
  // })
  // bank?: Array<BankModel>;

  // @withField({
  //   Resource: () => Card,
  //   isArray: true,
  //   isOptional: true,
  //   isRepository: true,
  //   type: PROPERTY_TYPE.RESOURCE,
  // })
  // card?: Array<CardModel>;

  // @withField({
  //   Resource: () => LinkedUser,
  //   isArray: true,
  //   isOptional: true,
  //   isRepository: true,
  //   type: PROPERTY_TYPE.RESOURCE,
  // })
  // linkedUser?: Array<LinkedUserModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  paymentMethodPrimary?: string;

  @withField({ isOptional: true, isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  phone?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  first?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  last?: string;
}
