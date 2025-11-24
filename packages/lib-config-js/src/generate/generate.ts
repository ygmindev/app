import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type GenerateConfigModel } from '@lib/config/generate/generate.models';
import { Config } from '@lib/config/utils/Config/Config';
import { jsPackage } from '@tool/task/generate/generators/jsPackage/jsPackage';

export const generateConfig = new Config<GenerateConfigModel>({
  params: () => ({
    generator: {
      'package-js': jsPackage,
    },

    templateDir: fromPackages('tool-task-js/templates'),
  }),
});
