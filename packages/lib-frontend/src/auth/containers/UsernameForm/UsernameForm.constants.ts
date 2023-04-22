import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateEmail } from '@lib/frontend/form/utils/validateEmail/validateEmail';

// TODO: phone form
export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<UsernameFormModel> = {
  username: validateEmail(),
};
