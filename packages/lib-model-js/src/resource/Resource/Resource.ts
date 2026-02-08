import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  type ResourceModel,
  ResourceParamsModel,
} from '@lib/model/resource/Resource/Resource.models';
import { ClassModel } from '@lib/shared/core/core.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';

export const Resource = (
  { isDatabase = false }: ResourceParamsModel = { isDatabase: true },
): ClassModel<ResourceModel> => {
  @withEntity({ isAbstract: true, isDatabase })
  class Class implements ResourceModel {
    @withField({ isDatabase, type: PROPERTY_TYPE.PRIMARY_KEY })
    _id!: string;

    id?: string;
  }
  return Class;
};
