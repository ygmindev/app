import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type GenerateConfigModel } from '@lib/config/generate/generate.models';
import { jsPackage } from '@lib/config/generate/generators/jsPackage/jsPackage';
import { Config } from '@lib/config/utils/Config/Config';

export const generateConfig = new Config<GenerateConfigModel>({
  params: () => ({
    generator: {
      'package-js': jsPackage,
    },

    templateDir: fromPackages('tool-task-js/templates'),

    variablePattern: /{{[A-Z_]+}}/g,
  }),
});
