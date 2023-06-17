import { _exportRoute } from '#lib-platform/web/exports/exportRoute/_exportRoute';
import type {
  ExportRouteModel,
  ExportRouteParamsModel,
} from '#lib-platform/web/exports/exportRoute/exportRoute.models';

export const exportRoute = ({ ...params }: ExportRouteParamsModel): ExportRouteModel =>
  _exportRoute({ ...params });
