import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { FormContainerPropsModel } from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { NameFormModel } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const NAME_FORM_CONTAINER_PROPS: FormContainerPropsModel<NameFormModel> = {
  rows: withId([
    {
      fields: [
        {
          field: FORM_FIELD_TYPE.TEXT_FIELD,
          fieldProps: { isAutoFocus: true, label: ({ t }) => t('user:labels.first') },
          id: 'first',
        },
        {
          field: FORM_FIELD_TYPE.TEXT_FIELD,
          fieldProps: { label: ({ t }) => t('user:labels.last') },
          id: 'last',
        },
      ],
    },
  ]),
};
