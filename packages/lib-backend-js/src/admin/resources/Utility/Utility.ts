import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import {
  type UtilityModel,
  type UtilityTypeModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, isEmbeddable: true, name: UTILITY_RESOURCE_NAME })
export class Utility extends EntityResource implements UtilityModel {
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  description?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  imageSrc?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  pricing?: string;

  @withField({ isArray: true, isDatabase: true, type: DATA_TYPE.STRING })
  type!: Array<UtilityTypeModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  url?: string;
}
