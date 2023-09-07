import { isValidPhoneNumber } from 'libphonenumber-js';

import { type _ValidatePhoneModel } from '#lib-frontend/data/utils/validatePhone/_validatePhone.models';

export const _validatePhone: _ValidatePhoneModel = ({ data, value }) =>
  data?.callingCode && value && isValidPhoneNumber(value, { defaultCallingCode: data.callingCode })
    ? null
    : ({ t }) => t('core:validatePhone');