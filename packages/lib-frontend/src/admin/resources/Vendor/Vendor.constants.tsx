import { UtilityTable } from '@lib-frontend/admin/containers/UtilityTable/UtilityTable';
import { Logo } from '@lib-frontend/app/components/Logo/Logo';
import { BUTTON_TYPE } from '@lib-frontend/core/components/Button/Button.constants';
import { ModalButton } from '@lib-frontend/core/components/ModalButton/ModalButton';
import { Text } from '@lib-frontend/core/components/Text/Text';
import { Wrapper } from '@lib-frontend/core/components/Wrapper/Wrapper';
import { type ResourceParamsModel } from '@lib-frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib-shared/admin/resources/Utility/Utility.constants';
import { VENDOR_RESOURCE_NAME } from '@lib-shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib-shared/admin/resources/Vendor/Vendor.models';

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
      fields: [{ id: '_id' }, { id: 'name' }],
      id: UTILITY_RESOURCE_NAME,
      renderer: ({ row, value }) => (
        <Wrapper isRowAlign>
          <ModalButton
            element={() => <UtilityTable root={row._id} />}
            icon="open"
            iconText={({ t }) => t('core:open')}
            title={UTILITY_RESOURCE_NAME}
            type={BUTTON_TYPE.INVISIBLE}
          />

          {value?.map(({ _id, name }) => <Text key={_id}>{name}</Text>)}
        </Wrapper>
      ),
      width: 220,
    },
  ],
  name: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<VendorModel>;
