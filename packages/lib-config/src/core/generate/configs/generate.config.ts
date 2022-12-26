import type { GenerateConfigParamsModel } from '@lib/config/core/generate/generate.models';
import { jsPackage } from '@tool/generate/generators/jsPackage/jsPackage';

export const generateConfig: GenerateConfigParamsModel = {
  'js-package': jsPackage,
};
