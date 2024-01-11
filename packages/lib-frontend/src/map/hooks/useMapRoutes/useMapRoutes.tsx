import {
  type UseMapRoutesModel,
  type UseMapRoutesParamsModel,
} from '#lib-frontend/map/hooks/useMapRoutes/useMapRoutes.models';
import { _useMapRoutes } from '#lib-frontend/map/hooks/useMapRoutes/_useMapRoutes';

export const useMapRoutes = (
  { ...props }: UseMapRoutesParamsModel,
): UseMapRoutesModel => _useMapRoutes({ ...props });
