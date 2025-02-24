import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type UTILITY_TYPE } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type UtilityModel = EmbeddedResourceModel & {
  [VENDOR_RESOURCE_NAME]?: RefFieldModel<VendorModel>;

  description?: string;

  imageSrc?: string;

  name: string;

  pricing?: string;

  type: Array<UtilityTypeModel>;

  url?: string;
};

export type UtilityFormModel = EntityResourceDataModel<UtilityModel>;

export type UtilityTypeModel = `${UTILITY_TYPE}`;
