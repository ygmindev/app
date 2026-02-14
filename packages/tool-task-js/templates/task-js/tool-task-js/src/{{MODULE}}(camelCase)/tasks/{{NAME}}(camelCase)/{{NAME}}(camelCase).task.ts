import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import {
  type {{NAME}}(pascalCase)Model,
  type {{NAME}}(pascalCase)ParamsModel,
} from '@tool/task/{{MODULE}}(camelCase)/tasks/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';

export const {{NAME}}(camelCase) = buildTask<{{NAME}}(pascalCase)ParamsModel, {{NAME}}(pascalCase)Model>({
  task: async ({}) => {
    return { message: 'success' };
  },
});
