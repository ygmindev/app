import { type MapQueryResultModel } from '#lib-frontend/map/hooks/useMapQuery/useMapQuery.models';
import { type CoordinateModel } from '#lib-shared/map/map.models';

export type _UseMapQueryModel = {
  data: Array<MapQueryResultModel>;
  query(params?: string): Promise<void>;
};

export type _UseMapQueryApiParamsModel = {
  api_key: string;
  q: string;
};

export type _UseMapQueryApiResultModel = Array<
  CoordinateModel & {
    display_name: string;
    importance?: number;
    lat: string;
    lon: string;
  }
>;
