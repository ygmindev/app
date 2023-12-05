import { Logo } from '#lib-frontend/app/components/Logo/Logo';
import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const VENDOR_RESOURCE_PARAMS = {
  fields: [
    {
      id: 'imageSrc',
      label: ({ t }) => t('core:image'),
      renderer: ({ value }) => (value ? <Logo src={value} /> : null),
    },
    { id: '_id' },
    { id: 'name' },
    { fields: [{ id: 'name' }], id: UTILITY_RESOURCE_NAME },
  ],
  name: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<VendorModel>;
