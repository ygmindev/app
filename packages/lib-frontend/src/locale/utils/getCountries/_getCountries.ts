import type {
  _GetCountriesModel,
  _GetCountriesParamsModel,
} from '@lib/frontend/locale/utils/getCountries/_getCountries.models';
import { getCountries } from 'libphonenumber-js';

export const _getCountries = ({ format: _format }: _GetCountriesParamsModel): _GetCountriesModel =>
  getCountries();
