import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: VENDOR_RESOURCE_NAME })
export class Vendor extends EntityResource implements VendorModel {
  @withEmbeddedResourceField({
    Resource: () => Utility,
    isRepository: true,
    root: VENDOR_RESOURCE_NAME,
  })
  [UTILITY_RESOURCE_NAME]?: Array<UtilityModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  imageSrc?: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${VENDOR_RESOURCE_NAME}Form` })
export class VendorForm implements VendorFormModel {}
