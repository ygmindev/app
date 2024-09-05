import configBase from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).frontend';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { _{{NAME}}(camelCase) } from '@lib/config/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import {
  type _{{NAME}}(pascalCase)ConfigModel,
  type {{NAME}}(pascalCase)ConfigModel,
} from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

const config = defineConfig<{{NAME}}(pascalCase)ConfigModel, _{{NAME}}(pascalCase)ConfigModel>({
  ...configBase,

  overrides: () => [],
});

export default config;
