import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _Routes } from '@lib/frontend/route/containers/Routes/_Routes';
import { type _RoutesPropsModel } from '@lib/frontend/route/containers/Routes/_Routes.models';
import { type RoutesPropsModel } from '@lib/frontend/route/containers/Routes/Routes.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { cloneElement } from 'react';

export const Routes = composeComponent<RoutesPropsModel, _RoutesPropsModel>({
  Component: _Routes,

  getProps: ({ routes, ...props }) => ({
    ...props,
    routes: routes.map(({ element, ...route }) => ({
      ...route,
      element: element && <Exitable>{cloneElement(element, { key: route.fullpath })}</Exitable>,
    })),
  }),
});

process.env.APP_IS_DEBUG && (Routes.displayName = variableName({ Routes }));
