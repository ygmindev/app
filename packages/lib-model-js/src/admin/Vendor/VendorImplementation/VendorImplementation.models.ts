import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type VendorImplementationModel = EntityResourceImplementationModel<VendorModel>;
