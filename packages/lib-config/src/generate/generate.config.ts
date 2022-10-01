import { _package } from '@tool/generate/generators/package/package';
// import { resource } from '@tool/generate/generators/resource/resource';
import type { GeneratorParamsModel } from '@tool/generate/tasks/generate/generate.models';

export const generateConfig: Record<string, GeneratorParamsModel> = {
  'js-package': _package,
  // 'js-resource': resource,
};
