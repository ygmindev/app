import { type MapQueryResultModel } from '@lib/frontend/map/hooks/useMapQuery/useMapQuery.models';

export type _UseMapQueryModel = {
  data: Array<MapQueryResultModel>;
  query(params?: string): Promise<void>;
};

export type _UseMapQueryApiParamsModel = {
  addressdetails: number;
  format: string;
  q: string;
};

export type _UseMapQueryApiResultModel = Array<{
  address?: {
    city?: string;
    country?: string;
    country_code?: string;
    house_number?: string;
    postcode?: string;
    road?: string;
    state?: string;
  };
  display_name?: string;
  importance?: number;
  lat?: string;
  lon?: string;
}>;
