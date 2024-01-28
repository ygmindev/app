import { type TimingModel, type VehicleTypeModel } from '@lib/shared/aroom/aroom.models';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';
import { type CoordinateModel } from '@lib/shared/map/utils/Coordinate/Coordinate.models';

export type MapRouteImplementationModel = {
  getRoute(input: GetRouteInputModel): Promise<MapRouteModel | null>;
};

export type GetRouteInputModel = {
  coordinates: Array<CoordinateModel>;
  timing: TimingModel;
  vehicle: VehicleTypeModel;
};
