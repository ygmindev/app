import { _{{NAME}}(camelCase)Config } from '@lib/config/javascript/{{NAME}}(camelCase)/_{{NAME}}(camelCase).config';
import type { _{{NAME}}(pascalCase)ConfigModel } from '@lib/config/javascript/{{NAME}}(camelCase)/_{{NAME}}(camelCase).models';
import { {{NAME}}(camelCase)ParamsConfig } from '@lib/config/javascript/{{NAME}}(camelCase)/params/{{NAME}}(camelCase).params';

export const {{NAME}}(camelCase)Config: _{{NAME}}(pascalCase)ConfigModel = _{{NAME}}(camelCase)Config({{NAME}}(camelCase)ParamsConfig);
