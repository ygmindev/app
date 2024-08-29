import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { MapRoute } from '@lib/backend/map/resources/MapRoute/MapRoute';
import { MapRouteImplementation } from '@lib/backend/map/resources/MapRoute/MapRouteImplementation/MapRouteImplementation';
import { type MapRouteResolverModel } from '@lib/backend/map/resources/MapRoute/MapRouteResolver/MapRouteResolver.models';
import { Coordinate } from '@lib/backend/map/utils/Coordinate/Coordinate';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withParams } from '@lib/backend/resource/utils/withParams/withParams';
import { withResult } from '@lib/backend/resource/utils/withResult/withResult';
import { type TimingModel, type VehicleTypeModel } from '@lib/shared/aroom/aroom.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { MAP_ROUTE_RESOURCE } from '@lib/shared/map/resources/MapRoute/MapRoute.constants';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';
import { type GetRouteInputModel } from '@lib/shared/map/resources/MapRoute/MapRouteImplementation/MapRouteImplementation.models';
import { type CoordinateModel } from '@lib/shared/map/utils/Coordinate/Coordinate.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

@withEntity({ name: 'GetRoute' })
export class GetRouteInput implements GetRouteInputModel {
  @withField({ Resource: () => Coordinate, isArray: true, type: PROPERTY_TYPE.RESOURCE })
  coordinates!: Array<CoordinateModel>;

  @withField({ type: DATA_TYPE.STRING })
  timing!: TimingModel;

  @withField({ type: DATA_TYPE.STRING })
  vehicle!: VehicleTypeModel;
}

@withContainer()
@withResolver()
export class MapRouteResolver implements MapRouteResolverModel {
  @withInject(MapRouteImplementation) protected mapRouteImplementation!: MapRouteImplementation;

  @withResult({
    Resource: () => MapRoute,
    name: `${RESOURCE_METHOD_TYPE.GET}${MAP_ROUTE_RESOURCE}`,
  })
  async getRoute(
    @withParams({ Resource: () => GetRouteInput })
    input: GetRouteInputModel,
  ): Promise<MapRouteModel> {
    return this.mapRouteImplementation.getRoute(input);
  }
}
