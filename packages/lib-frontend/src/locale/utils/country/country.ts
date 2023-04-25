import { _country } from '@lib/frontend/locale/utils/country/_country';
import type { CountryModel } from '@lib/frontend/locale/utils/country/country.models';

export const country = async (): Promise<CountryModel> => _country();
