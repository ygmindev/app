import { type AddressOptionModel } from '@lib/frontend/map/components/AddressInput/AddressInput.models';

export type _UseMapQueryModel = (query?: string) => Promise<Array<AddressOptionModel>>;

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
