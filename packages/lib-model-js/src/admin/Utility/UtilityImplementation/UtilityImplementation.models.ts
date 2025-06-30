import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';

export type UtilityImplementationModel = EmbeddedResourceImplementationModel<
  UtilityModel,
  VendorModel
>;
