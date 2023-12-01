import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type VendorServiceModel = EntityResourceServiceModel<VendorModel, VendorFormModel>;
