import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type {
  FormContainerFieldModel,
  FormContainerRowModel,
} from '@lib/frontend/form/containers/FormContainer/FormContainer.models';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateEmail } from '@lib/frontend/form/utils/validateEmail/validateEmail';
import { withId } from '@lib/shared/core/decorators/withId/withId';

// TODO: phone form
export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<UsernameFormModel> = {
  username: validateEmail(),
};

export const USERNAME_FORM_FIELDS: Array<FormContainerRowModel> = withId([
  {
    fields: [
      {
        autoComplete: 'email',
        field: FORM_FIELD_TYPE.TEXT_FIELD,
        icon: ICON.email,
        id: 'username',
        isAutoFocus: true,
        label: ({ t }) => t('user:labels.email'),
      } as FormContainerFieldModel,
    ],
  },
]);
