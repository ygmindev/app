import { Chip } from '@lib/frontend/core/components/Chip/Chip';
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

export const UTILITY_RESOURCE_PARAMS = {
  fields: [
    { id: 'imageSrc' },
    { id: 'name' },
    { id: 'description' },
    { id: 'pricing' },
    {
      id: 'type',
      options: Object.values(UTILITY_TYPE).map((id) => ({ id })),
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
  ],
  name: UTILITY_RESOURCE_NAME,
  rootName: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<UtilityModel, VendorModel>;
