import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import { type {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

const { _config, config } = defineConfig({
  _config: _{{NAME}}(camelCase),

  config: {
  } satisfies {{NAME}}(pascalCase)ConfigModel,
});

export { _config, config };
