import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import { type {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

const { _config, config } = defineConfig({
  _config: _{{NAME}}(camelCase),

  config: {
  } satisfies {{NAME}}(pascalCase)ConfigModel,
});

export { _config, config };
