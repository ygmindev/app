import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { PRICING_TABLE } from '@lib/backend/map/resources/MapRoute/MapRouteImplementation/MapRouteImplementation.constants';
import { TIMING } from '@lib/shared/aroom/aroom.constants';
import { type TimingModel, type VehicleTypeModel } from '@lib/shared/aroom/aroom.models';
import { type PriceTierModel } from '@lib/shared/aroom/utils/PriceTier/PriceTier.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';
import {
  type GetRouteInputModel,
  type MapRouteImplementationModel,
} from '@lib/shared/map/resources/MapRoute/MapRouteImplementation/MapRouteImplementation.models';
import { type CoordinateModel } from '@lib/shared/map/utils/Coordinate/Coordinate.models';
import round from 'lodash/round';
import toNumber from 'lodash/toNumber';

const getPrice = ({
  distanceMeters,
  durationSeconds,
  timing,
  vehicle,
}: {
  distanceMeters: number;
  durationSeconds: number;
  timing: TimingModel;
  vehicle: VehicleTypeModel;
}): number => {
  const { base, min, perMile, perMinute } = PRICING_TABLE[vehicle][timing];
  const miles = distanceMeters / 1609.34;
  const minutes = durationSeconds / 60;
  const price = Math.max(min, base + perMile * miles + perMinute * minutes);
  return round(price, 2);
};

@withContainer()
export class MapRouteImplementation implements MapRouteImplementationModel {
  @withInject(HttpImplementation) protected httpImplementation!: HttpImplementation;

  async getRoute(input: GetRouteInputModel): Promise<MapRouteModel> {
    const { coordinates, timing, vehicle } = input;

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

    // const result = await this.httpImplementation.post<
    //   unknown,
    //   {
    //     routes: Array<{
    //       distanceMeters: number;
    //       duration: string;
    //       polyline: { encodedPolyline: string };
    //     }>;
    //   }
    // >({
    //   params: cleanObject(params),
    //   request: {
    //     headers: {
    //       'X-Goog-Api-Key': process.env.SERVER_APP_GOOGLE_API_KEY,
    //       'X-Goog-FieldMask':
    //         'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline',
    //     },
    //   },
    //   url: 'https://routes.googleapis.com/directions/v2:computeRoutes',
    // });
    const result = {
      routes: [
        {
          distanceMeters: 6800,
          duration: '1805s',
          polyline: {
            encodedPolyline:
              'kbowFlxvbMhCd@x@TsA|DqB|FwCuBZcDEg@j@oGc@K}YcEae@yFuDWmIe@oDMk\\}AwTu@_CHcCNoAEk@IiAa@qCuA}@]{E}@y@Og@ABSAa@Ky@IWMUkBiAeEsCy@e@eHyEWMgm@w`@{DmCaKqGw@k@}BuAuFuDcOyJ|Mqb@sFqD',
          },
        },
      ],
    };

    const route = result?.routes?.[0];
    if (route) {
      const seconds = toNumber(route.duration.replace('s', ''));
      const priceTiers: Array<PriceTierModel> = [TIMING.RUSH, TIMING.SAME_DAY].map((timing) => ({
        price: getPrice({
          distanceMeters: route.distanceMeters,
          durationSeconds: seconds,
          timing,
          vehicle,
        }),
        timing,
      }));

      return {
        distance: route.distanceMeters,
        duration: seconds,
        polyline: route.polyline.encodedPolyline,
        priceTiers,
      };
    }
    return {
      distance: 0,
      duration: 0,
      polyline: '',
      priceTiers: [],
    };
  }
}
