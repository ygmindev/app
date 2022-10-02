import { jsPackage } from '@tool/generate/generators/package/package';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';

export const generateConfig: Record<string, GeneratorParamsModel> = {
  'js-package': jsPackage,
};
