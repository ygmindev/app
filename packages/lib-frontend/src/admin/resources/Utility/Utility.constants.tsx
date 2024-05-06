import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import {
  UTILITY_RESOURCE_NAME,
  UTILITY_TYPE,
  UTILITY_USAGE,
} from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';

export const UTILITY_RESOURCE_PARAMS = {
  fields: [
    { id: 'name' },
    { id: 'description' },
    {
      id: 'type',
      options: Object.values(UTILITY_TYPE).map((id) => ({ id })),
      renderer: ({ value }) => (value ? <Chip color={THEME_COLOR.SECONDARY}>{value}</Chip> : null),
    },
    {
      id: 'usage',
      options: Object.values(UTILITY_USAGE).map((id) => ({ id })),
      renderer: ({ value }) => (value ? <Chip color={THEME_COLOR.SECONDARY}>{value}</Chip> : null),
    },
  ],
  name: UTILITY_RESOURCE_NAME,
  rootName: VENDOR_RESOURCE_NAME,
} satisfies ResourceParamsModel<UtilityModel, VendorModel>;
