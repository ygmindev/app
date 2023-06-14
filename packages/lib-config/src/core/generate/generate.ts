import type { GenerateConfigModel } from '#lib-config/core/generate/generate.models';
import { jsPackage } from '#tool-generate/generators/jsPackage/jsPackage';

export const config: GenerateConfigModel = {
  'js-package': jsPackage,
};
