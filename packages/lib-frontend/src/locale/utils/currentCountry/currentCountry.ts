import { type CurrentCountryModel } from '#lib-frontend/locale/utils/currentCountry/currentCountry.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';

export const currentCountry = async (): Promise<CurrentCountryModel> => {
  if (isServer) {
    return Promise.resolve(null);
  }
  const { _currentCountry } = await import(
    '#lib-frontend/locale/utils/currentCountry/_currentCountry'
  );
  return _currentCountry();
};
