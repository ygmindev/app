import { type {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';
import { Config } from '@lib/config/utils/Config/Config';

export const {{NAME}}(camelCase)Config = new Config<{{NAME}}(pascalCase)ConfigModel>({
  params: () => ({}),
});
