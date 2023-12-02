import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import {
  UTILITY_RESOURCE_NAME,
  UTILITY_TYPE,
  UTILITY_USAGE,
} from '#lib-shared/admin/resources/Utility/Utility.constants';
import {
  type UtilityFormModel,
  type UtilityModel,
} from '#lib-shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import { DATA_TYPE, DATA_TYPE_MORE } from '#lib-shared/data/data.constants';

export const UTILITY_TABLE_PROPS = {
  columns: [
    { id: VENDOR_RESOURCE_NAME, type: DATA_TYPE_MORE.ROOT },
    { id: 'name', type: DATA_TYPE.STRING },
    { id: 'description', type: DATA_TYPE.STRING },
    {
      id: 'type',
      options: [{ id: UTILITY_TYPE.API, label: ({ t }) => t('admin:api') }],
      type: DATA_TYPE.STRING,
    },
    {
      id: 'usage',
      options: [
        { id: UTILITY_USAGE.SMS, label: ({ t }) => t('admin:sms') },
        { id: UTILITY_USAGE.SMTP, label: ({ t }) => t('admin:smtp') },
        { id: UTILITY_USAGE.PAYMENT, label: ({ t }) => t('admin:payment') },
        { id: UTILITY_USAGE.USAGE_TRACKING, label: ({ t }) => t('admin:usageTracking') },
      ],
      type: DATA_TYPE.STRING,
    },
  ],
  name: UTILITY_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<UtilityModel, UtilityFormModel>, 'service'>;
