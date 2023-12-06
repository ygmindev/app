import { Logo } from '#lib-frontend/app/components/Logo/Logo';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { type ResourceParamsModel } from '#lib-frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const VENDOR_RESOURCE_PARAMS = {
  fields: [
    { id: '_id', isHidden: true },
    {
      id: 'imageSrc',
      label: ({ t }) => t('core:image'),
      renderer: ({ value }) => (value ? <Logo src={value} /> : null),
    },
    { id: 'name' },
    {
      fields: [{ id: '_id' }],
      id: UTILITY_RESOURCE_NAME,
      renderer: ({}) => (
        <Button
          icon="open"
          iconText={({ t }) => t('core:open')}
          type={BUTTON_TYPE.INVISIBLE}
        />
      ),
    },
  ],
  name: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<VendorModel>;
