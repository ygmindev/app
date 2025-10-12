import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { commerceRoutes } from '@lib/frontend/commerce/commerce.routes';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const config = defineConfig<RoutesConfigModel>({
  params: () => ({
    routes: getRoutes([...commerceRoutes]),
  }),
});

export default config;
