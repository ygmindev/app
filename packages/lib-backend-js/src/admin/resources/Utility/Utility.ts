import { Vendor } from '@lib/backend/admin/resources/Vendor/Vendor';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityModel,
  type UtilityTypeModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, isEmbeddable: true, name: UTILITY_RESOURCE_NAME })
export class Utility extends EmbeddedResource implements UtilityModel {
  @withRootField({ Resource: () => Vendor })
  [VENDOR_RESOURCE_NAME]?: RefFieldModel<VendorModel>;

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
