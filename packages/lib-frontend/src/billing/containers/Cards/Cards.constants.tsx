import { MaskedTextField } from '@lib/frontend/form/components/MaskedTextField/MaskedTextField';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/components/Resources/Resources.constants';
import type { ResourcesPropsModel } from '@lib/frontend/resource/components/Resources/Resources.models';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import type { CardFormModel, CardModel } from '@lib/shared/billing/resources/Card/Card.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const CARDS_PROPS: ResourcesPropsModel<CardModel, CardFormModel, UserModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS.map((column) => ({ ...column, isHidden: true })),

    {
      field: FORM_FIELD_TYPE.TEXT_FIELD,
      id: 'name',
      label: ({ t }) => t('billing:labels.nameOnCard'),
    },

    {
      id: 'exp',
      label: ({ t }) => t('billing:labels.expiration'),
      render: (props) => (
        <MaskedTextField
          {...props}
          mask="MM/YY"
        />
      ),
    },
  ],

  fields: [{ result: ['_id', 'created'] }],

  name: CARD_RESOURCE_NAME,
};
