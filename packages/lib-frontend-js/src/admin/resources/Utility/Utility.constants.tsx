import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import {
  UTILITY_RESOURCE_NAME,
  UTILITY_TYPE,
} from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const UTILITY_RESOURCE_PARAMS = {
  fields: [
    {
      id: 'imageSrc',
      label: ({ t }) => t('core:image'),
      renderer: ({ value }) => (value ? <Logo src={value} /> : null),
    },
    { id: 'name' },
    {
      id: 'type',
      options: cartesianObject({ id: Object.values(UTILITY_TYPE) }),
      renderer: ({ value }) =>
        value ? (
          <Wrapper
            isAlign
            isRow>
            {value.map((v) => (
              <Chip
                color={THEME_COLOR.SECONDARY}
                key={v}>
                {v}
              </Chip>
            ))}
          </Wrapper>
        ) : null,
    },
    { id: 'description' },
    {
      id: 'pricing',
      renderer: ({ value }) => (value ? <Link isNewTab>{value}</Link> : null),
      width: 300,
    },
    {
      id: 'url',
      renderer: ({ value }) => (value ? <Link isNewTab>{value}</Link> : null),
      width: 300,
    },
  ],
  name: UTILITY_RESOURCE_NAME,
  rootName: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<UtilityModel, VendorModel>;
