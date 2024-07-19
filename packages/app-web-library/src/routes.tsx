import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { Library } from '@lib/frontend/library/components/Library/Library';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { LIBRARY_PROPS } from '@lib/frontend/library/library.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type ComponentType } from 'react';

export const routes: Array<RouteModel> = getRoutes([
  {
    navigation: ROUTE_NAVIGATION.NAVIGATION,
    pathname: '/',
    routes: LIBRARY_PROPS.map((props) => {
      const id = (props.title =
        props.title ?? getComponentDisplayName(props.Component as ComponentType));
      return {
        element: <Library<unknown> {...(props as LibraryPropsModel<unknown>)} />,
        pathname: trimPathname(id),
        title: id,
      };
    }),
  },
]);
