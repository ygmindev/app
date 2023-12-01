import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import {
  DEPENDENCY_RESOURCE_NAME,
  DEPENDENCY_TYPE,
  DEPENDENCY_USAGE,
} from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

export const DEPENDENCY_TABLE_PROPS = {
  columns: [
    { id: 'name', type: DATA_TYPE.STRING },
    { id: 'description', type: DATA_TYPE.STRING },
    {
      id: 'type',
      options: [{ id: DEPENDENCY_TYPE.API, label: ({ t }) => t('admin:api') }],
      type: DATA_TYPE.STRING,
    },
    {
      id: 'usage',
      options: [
        { id: DEPENDENCY_USAGE.SMS, label: ({ t }) => t('admin:sms') },
        { id: DEPENDENCY_USAGE.SMTP, label: ({ t }) => t('admin:smtp') },
        { id: DEPENDENCY_USAGE.PAYMENT, label: ({ t }) => t('admin:payment') },
      ],
      type: DATA_TYPE.STRING,
    },
  ],
  name: DEPENDENCY_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<DependencyModel, DependencyFormModel>, 'service'>;
