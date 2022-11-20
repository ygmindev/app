import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/components/Resources/Resources.constants';
import type { ResourcesPropsModel } from '@lib/frontend/resource/components/Resources/Resources.models';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const CARDS_PROPS: ResourcesPropsModel<CardModel, CardFormModel, UserModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS.map((column) => ({ ...column, isHidden: true })),
    {
      field: FORM_FIELD_TYPE.TEXT_FIELD,
      id: 'last4',
      label: ({ t }) => t('billing:labels.last4'),
      type: FIELD_TYPE.NUMBER,
    },
  ],

  fields: [{ result: ['_id', 'created'] }],

  name: CARD_RESOURCE_NAME,
};
