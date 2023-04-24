import type {
  _CountriesModel,
  _CountriesParamsModel,
} from '@lib/frontend/locale/utils/countries/_countries.models';
import { getCountries } from 'libphonenumber-js';

export const _countries = ({ format: _format }: _CountriesParamsModel): _CountriesModel =>
  getCountries();
