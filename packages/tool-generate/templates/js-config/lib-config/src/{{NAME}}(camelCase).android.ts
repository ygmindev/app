import { _{{NAME}}(camelCase) } from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import { config as configFrontend } from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).frontend';
import {
  type _{{NAME}}(pascalCase)ConfigModel,
  type {{NAME}}(pascalCase)ConfigModel,
} from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const config: {{NAME}}(pascalCase)ConfigModel = ({ ...params } = {}) =>
  merge(
    [
      {},

      configFrontend({ ...params }),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _{{NAME}}(pascalCase)ConfigModel = ({ ...params } = {}) => _{{NAME}}(camelCase)(config({ ...params }));
