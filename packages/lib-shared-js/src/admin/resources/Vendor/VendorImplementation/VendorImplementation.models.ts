import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type VendorImplementationModel = EntityResourceImplementationModel<VendorModel>;
