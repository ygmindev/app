import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type GenerateConfigModel } from '@lib/config/generate/generate.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { jsPackage } from '@tool/task/generate/generators/jsPackage/jsPackage';

const config = defineConfig<GenerateConfigModel>({
  params: () => ({
    generator: {
      'package-js': jsPackage,
    },

    templateDir: fromPackages('tool-task-js/templates'),
  }),
});

export default config;
