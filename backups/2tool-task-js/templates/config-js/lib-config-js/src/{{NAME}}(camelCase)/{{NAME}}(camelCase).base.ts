import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import {
  type _{{NAME}}(pascalCase)ConfigModel,
  type {{NAME}}(pascalCase)ConfigModel,
} from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

export const config = defineConfig<{{NAME}}(pascalCase)ConfigModel, _{{NAME}}(pascalCase)ConfigModel>({
  config: _{{NAME}}(camelCase),

  params: () => ({}),
});

export default config;
