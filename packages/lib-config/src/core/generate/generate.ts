// COMPLETE
import { type GenerateConfigModel } from '@lib/config/core/generate/generate.models';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { jsPackage } from '@tool/task/generate/generators/jsPackage/jsPackage';

const { _config, config } = defineConfig({
  config: {
    'js-package': jsPackage,
  } satisfies GenerateConfigModel,
});

export { _config, config };
