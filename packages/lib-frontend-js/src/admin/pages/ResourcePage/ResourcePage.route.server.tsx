import { type ResourcePageParamsModel } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.models';
import { resourceRoute as resourceRouteBase } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route.base';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const resourceRoute: RouteModel<undefined, ResourcePageParamsModel> = {
  ...resourceRouteBase,
  loaders: ({ pathname }) => ({
    data: async () => {
      return 'data';
    },
  }),
};

// import { Container } from '@lib/backend/core/utils/Container/Container';
// import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
// import { Database } from '@lib/backend/database/utils/Database/Database';
// import { type ResourcePageParamsModel } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.models';
// import { resourceRoute as resourceRouteBase } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route.base';
// import { type RouteModel } from '@lib/frontend/route/route.models';
// import capitalize from 'lodash/capitalize';

// export const resourceRoute: RouteModel<undefined, ResourcePageParamsModel> = {
//   ...resourceRouteBase,
//   loaders: ({ pathname }) => ({
//     data: async () => {
//       if (pathname) {
//         const name = capitalize(pathname.slice(pathname.lastIndexOf('/') + 1));
//         const collection = Container.get(Database, DATABASE_TYPE.MONGO).getRepository({ name });
//         const result = await collection.getConnection({ pagination: { first: 10 } });
//         console.warn(result);
//       }
//       return 'data';
//     },
//   }),
// };
