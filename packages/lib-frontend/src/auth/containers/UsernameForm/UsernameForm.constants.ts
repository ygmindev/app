import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { FormContainerRowModel } from '@lib/frontend/core/containers/FormContainer/FormContainer.models';
import type { FormValidatorsModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import { validEmail } from '@lib/frontend/core/utils/validators/validators';
import { withId } from '@lib/shared/core/decorators/withId/withId';

// TODO: phone form
export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<UsernameFormModel> = {
  username: validEmail,
};

export const USERNAME_FORM_FIELDS: Array<FormContainerRowModel> = withId([
  {
    fields: withId([
      {
        autoComplete: 'email',
        icon: ICON.email,
        id: 'username',
        label: ({ t }) => t('user:labels.email'),
      },
    ]),
  },
]);
