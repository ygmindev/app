import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type ResourceModel,
  ResourceParamsModel,
} from '@lib/model/resource/Resource/Resource.models';
import { ClassModel } from '@lib/shared/core/core.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { PrimaryKeyModel } from '@lib/shared/resource/resource.models';

export const Resource = (
  { isDatabase }: ResourceParamsModel = { isDatabase: false },
): ClassModel<ResourceModel> => {
  @withEntity({ isAbstract: true, isDatabase })
  class Class implements ResourceModel {
    @withField({ isDatabase, type: PROPERTY_TYPE.PRIMARY_KEY })
    _id!: PrimaryKeyModel;

    id?: string;
  }
  return Class;
};
