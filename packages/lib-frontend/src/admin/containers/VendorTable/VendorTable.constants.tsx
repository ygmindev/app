import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

export const VENDOR_TABLE_PROPS = {
  columns: [{ id: 'name', type: DATA_TYPE.STRING }],
  name: VENDOR_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<VendorModel, VendorFormModel>, 'service'>;
