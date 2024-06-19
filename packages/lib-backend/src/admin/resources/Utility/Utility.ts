import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityModel,
  type UtilityTypeModel,
  type UtilityUsageModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isEmbeddable: true, isRepository: true, name: UTILITY_RESOURCE_NAME })
export class Utility extends EmbeddedResource implements UtilityModel {
  @withRefField({ Resource: () => Vendor })
  [VENDOR_RESOURCE_NAME]?: RefFieldModel<VendorModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  description?: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  type!: UtilityTypeModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  usage!: UtilityUsageModel;
}
