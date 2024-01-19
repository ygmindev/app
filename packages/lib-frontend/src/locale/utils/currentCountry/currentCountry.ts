import { _currentCountry } from '@lib/frontend/locale/utils/currentCountry/_currentCountry';
import { type CurrentCountryModel } from '@lib/frontend/locale/utils/currentCountry/currentCountry.models';

export const currentCountry = async (): Promise<CurrentCountryModel> => _currentCountry();
