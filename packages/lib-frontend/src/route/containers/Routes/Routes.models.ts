import type { _RoutesPropsModel } from '#lib-frontend/route/containers/Routes/_Routes.models';

export type RoutesPropsModel = Omit<_RoutesPropsModel, 'depth'>;
