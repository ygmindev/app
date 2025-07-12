import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import {
  type _UseMapQueryApiParamsModel,
  type _UseMapQueryApiResultModel,
  type _UseMapQueryModel,
} from '@lib/frontend/map/hooks/useMapQuery/_useMapQuery.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { sort } from '@lib/shared/core/utils/sort/sort';
import { uid } from '@lib/shared/core/utils/uid/uid';
import filter from 'lodash/filter';
import toNumber from 'lodash/toNumber';

export const _useMapQuery = (): _UseMapQueryModel => {
  const { get } = useHttp();
  return async (query) => {
    if (query?.length) {
      const result = await get<_UseMapQueryApiParamsModel, _UseMapQueryApiResultModel>({
        params: { addressdetails: 1, format: 'json', q: query },
        url: 'https://nominatim.openstreetmap.org/search',
      });
      return result
        ? sort(
            filter(result, (v) => !!v?.address),
            [['importance', false]],
          ).map(({ address, display_name, lat, lon }) => ({
            address1: filterNil([address?.house_number, address?.road]).join(' '),
            city: address?.city,
            country: address?.country,
            countryCode: address?.country_code ? address.country_code.toUpperCase() : undefined,
            id: display_name ?? uid('address'),
            latitude: lat ? toNumber(lat) : undefined,
            longitude: lon ? toNumber(lon) : undefined,
            postalCode: address?.postcode,
            province: address?.state,
          }))
        : [];
    }
    return [];
  };
};
