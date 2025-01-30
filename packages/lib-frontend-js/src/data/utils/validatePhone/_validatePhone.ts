import { type _ValidatePhoneModel } from '@lib/frontend/data/utils/validatePhone/_validatePhone.models';
import { phoneNumber } from '@lib/shared/locale/utils/phoneNumber/phoneNumber';

export const _validatePhone: _ValidatePhoneModel = ({ data, value }) =>
  data?.callingCode && value && phoneNumber.isValid(value, data.callingCode)
    ? null
    : ({ t }) => t('core:validatePhone');
