import type { _RoutesPropsModel } from '#lib-frontend/route/containers/Routes/_Routes.models';

export interface RoutesPropsModel extends Omit<_RoutesPropsModel, 'depth'> {}
