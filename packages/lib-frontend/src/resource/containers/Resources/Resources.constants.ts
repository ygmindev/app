import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { ResourcesColumnModel } from '@lib/frontend/resource/containers/Resources/Resources.models';
import { dateTimeFormat } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '@lib/shared/formatting/utils/dateTimeFormat/dateTimeFormat.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const ENTITY_RESOURCE_COLUMNS: Array<ResourcesColumnModel<EntityResourceModel>> = [
  {
    field: FORM_FIELD_TYPE.TEXT_FIELD,
    id: '_id',
    isDisabled: true,
    isHidden: true,
    label: ({ t }) => t('resource:labels.id'),
  },
  {
    field: FORM_FIELD_TYPE.TEXT_FIELD,
    formatter: ({ value }) =>
      dateTimeFormat({
        format: DATE_TIME_FORMAT_TYPE.DATE_TIME_MINUTES,
        value: value as unknown as Date,
      }),
    id: 'created',
    isDisabled: true,
    label: ({ t }) => t('resource:labels.created'),
  },
];
