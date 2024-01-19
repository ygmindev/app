import join from 'lodash/join';
import toNumber from 'lodash/toNumber';
import { useCallback } from 'react';

import { useMutation } from '@lib/frontend/data/hooks/useMutation/useMutation';
import { type AddressOptionModel } from '@lib/frontend/map/components/AddressField/AddressField.models';
import { _useMapQuery } from '@lib/frontend/map/hooks/useMapQuery/_useMapQuery';
import { USE_MAP_QUERY_DEBOUNCE_DURATION } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.constants';
import { type UseMapQueryModel } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';

export const serializeAddress = ({
  label,
  latitude,
  longitude,
}: Omit<AddressOptionModel, 'id'>): string => join([longitude, latitude, label], ';');

export const deserializeAddress = (v: string): Omit<AddressOptionModel, 'id'> => {
  const [longitude, latitude, label] = v.split(';');
  return { label, latitude: toNumber(latitude), longitude: toNumber(longitude) };
};

export const useMapQuery = (): UseMapQueryModel => {
  const { data, query } = _useMapQuery();
  const { mutate } = useMutation('map', query);
  const queryF = useCallback(debounce(mutate, { duration: USE_MAP_QUERY_DEBOUNCE_DURATION }), []);
  return { data, query: queryF };
};
