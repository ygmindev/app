/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type _CurrentCountryModel } from '@lib/frontend/locale/utils/currentCountry/_currentCountry.models';
import geolocator from 'geolocator';

export const _currentCountry = async (): Promise<_CurrentCountryModel> => {
  geolocator.config({ language: 'en' });
  return new Promise((resovle, reject) =>
    geolocator.locateByIP(
      { addressLookup: false, fallbackToIP: true, timezone: false },
      (e: Error, location?: { address?: { countryCode?: string } }) => {
        if (e) {
          reject(e);
        } else {
          resovle(location?.address?.countryCode ?? undefined);
        }
      },
    ),
  );
};
