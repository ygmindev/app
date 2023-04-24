import type {
  _CallingCodeModel,
  _CallingCodeParamsModel,
} from '@lib/frontend/locale/utils/callingCode/_callingCode.models';
import type { CountryCode } from 'libphonenumber-js';
import { getCountryCallingCode } from 'libphonenumber-js';

export const _callingCode = (params: _CallingCodeParamsModel): _CallingCodeModel =>
  getCountryCallingCode(params as CountryCode);
