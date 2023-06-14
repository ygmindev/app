import type { CurrentCountryModel } from '#lib-frontend/locale/utils/currentCountry/currentCountry.models';

import { isSsr } from '#lib-platform/core/utils/isSsr/isSsr';

export const currentCountry = async (): CurrentCountryModel => {
  if (isSsr) {
    return Promise.resolve(null);
  }
  const { _currentCountry } = await import(
    '#lib-frontend/locale/utils/currentCountry/_currentCountry'
  );
  return _currentCountry();
};
