import { COUNTRY_FORMAT } from '@lib/frontend/locale/locale.constants';
import { _countries } from '@lib/frontend/locale/utils/countries/_countries';
import type {
  CountriesModel,
  CountriesParamsModel,
} from '@lib/frontend/locale/utils/countries/countries.models';

export const countries = (
  { ...params }: CountriesParamsModel = { format: COUNTRY_FORMAT.ISO2 },
): CountriesModel => _countries({ ...params });
