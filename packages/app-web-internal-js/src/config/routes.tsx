import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { GETTING_STARTED } from '@lib/frontend/documentation/documentation.constants';
import { GettingStartedPage } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage';
import { Library } from '@lib/frontend/library/components/Library/Library';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { LIBRARY, LIBRARY_PROPS } from '@lib/frontend/library/library.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type ComponentType } from 'react';

export const routes = getRoutes([
  {
    element: <GettingStartedPage />,
    icon: 'rocket',
    isNavigatable: true,
    pathname: GETTING_STARTED,
    title: ({ t }) => t('developer:gettingStarted'),
  },

  {
    icon: 'book',
    isNavigatable: true,
    navigation: ROUTE_NAVIGATION.TAB,
    pathname: LIBRARY,
    routes: LIBRARY_PROPS.map((props) => {
      const id = (props.title =
        props.title ?? getComponentDisplayName(props.Component as ComponentType));
      return {
        category: props.category,
        element: <Library<unknown> {...(props as LibraryPropsModel<unknown>)} />,
        isNavigatable: true,
        pathname: trimPathname(id),
        prerender: true,
        title: id,
      };
    }),
    title: ({ t }) => t('developer:library'),
  },
]);
