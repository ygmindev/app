import isString from 'lodash/isString';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type RunAllParamsModel } from '#tool-task/core/templates/runAll/runAll.models';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '#tool-task/core/utils/TaskRunner/TaskRunner';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'run-all',

  options: ({ name, variables: overrides }) => {
    const { registry } = Container.get(TaskRunner);
    const options = Object.keys(registry).filter(
      (k) =>
        k !== name &&
        overrides?.patterns?.some((pattern) =>
          isString(pattern) ? pattern === k : pattern.test(k),
        ),
    );
    return [{ defaultValue: options, key: 'tasks', options, type: PROMPT_TYPE.CHECKBOX }];
  },

  task: [
    async ({ options }) => {
      const { registry } = Container.get(TaskRunner);
      const tasksF = options?.tasks?.map((task) => registry[task]);
      tasksF && (await (options?.isParallel ? Promise.all(tasksF) : sequence(tasksF)));
    },
  ],
};
