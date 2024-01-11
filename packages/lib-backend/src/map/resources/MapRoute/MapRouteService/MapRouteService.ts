import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { HttpService } from '#lib-shared/http/utils/HttpService/HttpService';
import { type MapRouteModel } from '#lib-shared/map/resources/MapRoute/MapRoute.models';
import { MAP_ROUTE_TIER } from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.constants';
import {
  type GetRouteInputModel,
  type MapRouteServiceModel,
  type MapRouteTierModel,
} from '#lib-shared/map/resources/MapRoute/MapRouteService/MapRouteService.models';

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
    const [origin, destination] = [coordinates[0], coordinates[coordinates.length - 1]];
    const intermediates = coordinates.slice(1, -1);
    const params: Record<string, unknown> = {
      destination: { latLng: destination },
      origion: { latLng: origin },
      routingPreference: 'TRAFFIC_AWARE',
      travelMode: 'DRIVE',
    };
    intermediates?.length &&
      (params.intermediates = intermediates.map((value) => ({ latLng: value })));

    const result = await this.httpService.post({
      params,
      request: {
        headers: {
          'X-Goog-Api-Key': process.env.SERVER_GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline',
        },
      },
      url: 'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix',
    });
    console.warn(result);

    return {
      distance: 100,
      duration: '',
      polyline: '',
      price: 100,
    };
  }
}

//-74.014200, 40.714860
//-73.987968, 40.759769
