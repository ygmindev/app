import {
  type UtilityFormModel,
  type UtilityModel,
} from '@lib/shared/admin/resources/Utility/Utility.models';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type UtilityImplementationModel = EmbeddedResourceImplementationModel<
  UtilityModel,
  UtilityFormModel,
  VendorModel
>;
