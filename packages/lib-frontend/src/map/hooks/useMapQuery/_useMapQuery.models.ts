import { type MapCoordinateModel, type MapLocationModel } from '#lib-shared/map/map.models';

export type _UseMapQueryModel = {
  data: Array<MapLocationModel>;
  query(params?: string): Promise<void>;
};

export type _UseMapQueryApiParamsModel = {
  api_key: string;
  q: string;
};

export type _UseMapQueryApiResultModel = Array<
  MapCoordinateModel & {
    display_name: string;
    importance?: number;
    lat: string;
    lon: string;
  }
>;
