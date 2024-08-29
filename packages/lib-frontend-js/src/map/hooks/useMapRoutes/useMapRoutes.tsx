import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { type UseMapRoutesModel } from '@lib/frontend/map/hooks/useMapRoutes/useMapRoutes.models';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { MAP_ROUTE_RESOURCE } from '@lib/shared/map/resources/MapRoute/MapRoute.constants';
import { type MapRouteModel } from '@lib/shared/map/resources/MapRoute/MapRoute.models';
import { type GetRouteInputModel } from '@lib/shared/map/resources/MapRoute/MapRouteImplementation/MapRouteImplementation.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

export const useMapRoutes = (): UseMapRoutesModel => {
  const { query } = useAppGraphql();
  return {
    getRoute: async (input) => {
      const output = await query<{ input: GetRouteInputModel }, MapRouteModel>({
        fields: ['distance', 'duration', 'polyline', { priceTiers: ['price', 'timing'] }],
        name: `${RESOURCE_METHOD_TYPE.GET}${MAP_ROUTE_RESOURCE}`,
        params: { input: 'GetRouteInput' },
        type: GRAPHQL_OPERATION_TYPE.QUERY,
        variables: { input },
      });
      return output;
    },
  };
};
