import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { HttpService } from '#lib-backend/http/utils/HttpService/HttpService';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject.base';
import { stringify } from '#lib-shared/core/utils/stringify/stringify';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { type MapRouteModel } from '#lib-shared/map/resources/MapRoute/MapRoute.models';
import { MAP_ROUTE_TIER } from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.constants';
import {
  type GetRouteInputModel,
  type MapRouteServiceModel,
  type MapRouteTierModel,
} from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';
import { type CoordinateModel } from '#lib-shared/map/utils/Coordinate/Coordinate.models';

const CONFIG: Record<MapRouteTierModel, { minRate: number; ratePerMile: number }> = {
  [MAP_ROUTE_TIER.RUSH]: {
    minRate: 30,
    ratePerMile: 10,
  },
  [MAP_ROUTE_TIER.SAME_DAY]: {
    minRate: 30,
    ratePerMile: 10,
  },
};

@withContainer()
export class MapRouteService implements MapRouteServiceModel {
  @withInject(HttpService) protected httpService!: HttpService;

  async getRoute(input: GetRouteInputModel): Promise<MapRouteModel> {
    const { coordinates } = input;
    // const [origin, destination] = [coordinates[0], coordinates[coordinates.length - 1]];
    const origin: CoordinateModel = {
      latitude: 40.71486,
      longitude: -74.0142,
    };
    const destination: CoordinateModel = {
      latitude: 40.759769,
      longitude: -73.987968,
    };
    const intermediates = coordinates.slice(1, -1);
    const params: Record<string, unknown> = {
      destination: { location: { latLng: destination } },
      origin: { location: { latLng: origin } },
      routingPreference: 'TRAFFIC_AWARE',
      travelMode: 'DRIVE',
    };
    intermediates?.length &&
      (params.intermediates = intermediates.map((value) => ({ latLng: value })));
    const result = await this.httpService.post({
      params: cleanObject(params),
      request: {
        headers: {
          'X-Goog-Api-Key': process.env.SERVER_GOOGLE_API_KEY,
          'X-Goog-FieldMask':
            'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
        },
      },
      url: 'https://routes.googleapis.com/directions/v2:computeRoutes',
    });
    console.warn('DONE!');
    console.warn(stringify(result));

    return {
      distance: 100,
      duration: '',
      polyline: '',
      price: 100,
    };
  }
}
