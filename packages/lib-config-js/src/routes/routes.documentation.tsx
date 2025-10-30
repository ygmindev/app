import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import { DEVELOPER, GETTING_STARTED } from '@lib/frontend/documentation/documentation.constants';
import { GettingStartedPage } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage';
import { Library } from '@lib/frontend/library/components/Library/Library';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { LIBRARY, LIBRARY_PROPS } from '@lib/frontend/library/library.constants';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type ComponentType } from 'react';

export const config = defineConfig<RoutesConfigModel>({
  params: () => ({
    routes: getRoutes([
      {
        category: {
          icon: 'code',
          id: DEVELOPER,
          label: ({ t }) => t('documentation:developer'),
        },
        isNavigatable: true,
        pathname: DEVELOPER,
        prerender: true,
        routes: [
          {
            element: <GettingStartedPage />,
            isNavigatable: true,
            pathname: GETTING_STARTED,
            title: ({ t }) => t('documentation:gettingStarted'),
          },
        ],
      },

      {
        category: {
          icon: 'book',
          id: LIBRARY,
          label: ({ t }) => t('documentation:library'),
        },
        isNavigatable: true,
        navigation: ROUTE_NAVIGATION.NAVIGATION,
        pathname: LIBRARY,
        prerender: true,
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
      },
    ]),
  }),
});

export default config;
