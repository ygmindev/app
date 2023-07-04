import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { _Routes } from '#lib-frontend/route/containers/Routes/_Routes';
import { type _RoutesPropsModel } from '#lib-frontend/route/containers/Routes/_Routes.models';
import { type RoutesPropsModel } from '#lib-frontend/route/containers/Routes/Routes.models';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Routes = composeComponent<RoutesPropsModel, _RoutesPropsModel>({
  Component: _Routes,
});

process.env.APP_IS_DEBUG && (Routes.displayName = variableName({ Routes }));
