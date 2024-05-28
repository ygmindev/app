import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { {{NAME}}(camelCase)Config as configBase } from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).frontend';
import { type {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

export const {{NAME}}(camelCase)Config: {{NAME}}(camelCase)ConfigModel = defineConfig({
  ...{{NAME}}(camelCase)Config,
});
