import { _{{NAME}}(camelCase) } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import type { _{{NAME}}(pascalCase)ConfigModel, {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

export const config: {{NAME}}(pascalCase)ConfigModel = {};

export const _config: _{{NAME}}(pascalCase)ConfigModel = () => _{{NAME}}(camelCase)(config);
