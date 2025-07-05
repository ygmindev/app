import { type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { validateEmail } from '@lib/frontend/data/utils/validateEmail/validateEmail';
import { validateNotEmpty } from '@lib/frontend/data/utils/validateNotEmpty/validateNotEmpty';
import { validatePhone } from '@lib/frontend/data/utils/validatePhone/validatePhone';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resource.models';

export const USERNAME_FORM_VALIDATORS: FormValidatorsModel<EntityResourceDataModel<UserModel>> = {
  callingCode: [(params) => (params.data?.email ? null : validateNotEmpty(params))],
  email: [(params) => (params.data?.phone ? null : validateEmail(params))],
  phone: [(params) => (params.data?.email ? null : validatePhone(params))],
};
