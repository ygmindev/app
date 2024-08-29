import { type GenerateConfigModel } from '@lib/config/generate/generate.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { jsPackage } from '@tool/task/generate/generators/jsPackage/jsPackage';

const config = defineConfig<GenerateConfigModel>({
  params: () => ({
    'js-package': jsPackage,
  }),
});

export default config;
