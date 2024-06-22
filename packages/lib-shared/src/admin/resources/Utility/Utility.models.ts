import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import {
  type UTILITY_TYPE,
  type UTILITY_USAGE,
} from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type UtilityModel = EmbeddedResourceModel & {
  _vendor?: RefFieldModel<VendorModel>;

  description?: string;

  name: string;

  type: UtilityTypeModel;

  usage: UtilityUsageModel;
};

export type UtilityFormModel = EntityResourceDataModel<UtilityModel>;

export type UtilityTypeModel = `${UTILITY_TYPE}`;

export type UtilityUsageModel = `${UTILITY_USAGE}`;
