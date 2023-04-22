import type {
  _GetCallingCodeModel,
  _GetCallingCodeParamsModel,
} from '@lib/frontend/locale/utils/getCallingCode/_getCallingCode.models';
import type { CountryCode } from 'libphonenumber-js';
import { getCountryCallingCode } from 'libphonenumber-js';

export const _getCallingCode = (params: _GetCallingCodeParamsModel): _GetCallingCodeModel =>
  getCountryCallingCode(params as CountryCode);
