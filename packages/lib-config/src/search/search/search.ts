import { type SearchConfigModel } from '@lib/config/search/search/search.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<SearchConfigModel>({
  params: () => ({
    delay: 500,

    limit: 15,

    threshold: 0.99,
  }),
});

export default config;
