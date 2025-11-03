import { config as configBase } from '@lib/config/api/api';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<ApiConfigModel>({
  ...configBase,

  overrides: () => [
    {
      routes: [],
    },
  ],
});
