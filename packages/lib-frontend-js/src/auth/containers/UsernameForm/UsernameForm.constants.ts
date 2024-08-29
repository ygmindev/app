import { type UsernameFormModel } from '@lib/frontend/auth/containers/UsernameForm/UsernameForm.models';
import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { validateEmail } from '@lib/frontend/data/utils/validateEmail/validateEmail';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { validatePhone } from '@lib/frontend/data/utils/validatePhone/validatePhone';

export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<UsernameFormModel> = {
  callingCode: (params) => (params.data?.email ? null : validateNotEmpty(params)),
  email: (params) => (params.data?.phone ? null : validateEmail(params)),
  phone: (params) => (params.data?.email ? null : validatePhone(params)),
};
