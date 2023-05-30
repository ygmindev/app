import type { UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import { validateEmail } from '@lib/frontend/form/utils/validateEmail/validateEmail';
import { validateNotEmpty } from '@lib/frontend/form/utils/validateNotEmpty/validateNotEmpty';
import { validatePhone } from '@lib/frontend/form/utils/validatePhone/validatePhone';

// TODO: phone form
export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<UsernameFormModel> = {
  callingCode: (params) => (params.data?.email ? null : validateNotEmpty(params)),
  email: (params) => (params.data?.phone ? null : validateEmail(params)),
  phone: (params) => (params.data?.email ? null : validatePhone(params)),
};
