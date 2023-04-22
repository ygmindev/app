import { COUNTRY_FORMAT } from '@lib/frontend/locale/locale.constants';
import { _getCountries } from '@lib/frontend/locale/utils/getCountries/_getCountries';
import type {
  GetCountriesModel,
  GetCountriesParamsModel,
} from '@lib/frontend/locale/utils/getCountries/getCountries.models';

export const getCountries = (
  { ...params }: GetCountriesParamsModel = { format: COUNTRY_FORMAT.ISO2 },
): GetCountriesModel => _getCountries({ ...params });
