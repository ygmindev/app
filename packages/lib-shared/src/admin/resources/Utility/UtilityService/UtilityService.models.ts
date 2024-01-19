import {
  type UtilityFormModel,
  type UtilityModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';

export type UtilityServiceModel = EmbeddedResourceServiceModel<
  UtilityModel,
  UtilityFormModel,
  VendorModel
>;
