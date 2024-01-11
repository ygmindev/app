import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { type MapRouteModel } from '#lib-shared/map/resources/MapRoute/MapRoute.models';
import {
  type GetRouteInputModel,
  type MapRouteServiceModel,
} from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';

@withContainer()
export class MapRouteService implements MapRouteServiceModel {
  async getRoute(input: GetRouteInputModel): Promise<MapRouteModel> {
    console.warn(input);
    return {
      price: 100,
    };
  }
}
