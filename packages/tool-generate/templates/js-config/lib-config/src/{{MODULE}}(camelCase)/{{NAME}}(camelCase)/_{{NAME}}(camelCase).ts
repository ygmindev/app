import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type { _{{NAME}}(pascalCase)ConfigModel, {{NAME}}(pascalCase)ConfigModel } from '@lib/config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase).models';

const _{{NAME}}(camelCase)Config: _{{NAME}}(pascalCase)ConfigModel = async () => {
  const {} = await importConfig<{{NAME}}(pascalCase)ConfigModel>('{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase)');
  return {
  };
};

export default _{{NAME}}(camelCase)Config;
