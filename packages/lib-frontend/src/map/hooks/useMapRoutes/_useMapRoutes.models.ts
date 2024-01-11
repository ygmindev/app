import { type CoordinateModel } from '#lib-shared/map/map.models';

export type _UseMapRoutesModel = {
  getRoutes(params: {
    coordinates: Array<CoordinateModel>;
  }): Promise<{ distance: number; duration: string; polyline: string }>;
};
