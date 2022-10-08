import type { TableColumnModel } from '@lib/frontend/core/components/Table/Table.models';
import { dateTimeFormat } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const ENTITY_RESOURCE_TABLE_LIMIT = 10;

export const ENTITY_RESOURCE_COLUMNS: Array<TableColumnModel<EntityResourceModel, unknown>> = [
  { id: '_id', isHidden: true, label: ({ t }) => t('resource:labels.id') },
  {
    formatter: ({ value }) =>
      dateTimeFormat({
        format: DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES,
        value: value as unknown as Date,
      }),
    id: 'created',
    label: ({ t }) => t('resource:labels.created'),
  },
];
