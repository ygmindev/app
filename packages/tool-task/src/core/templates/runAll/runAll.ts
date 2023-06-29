import isString from 'lodash/isString';
import reduce from 'lodash/reduce';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskParamsModel, type TaskResultModel } from '#tool-task/core/core.models';
import { type RunAllParamsModel } from '#tool-task/core/templates/runAll/runAll.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRegistry } from '#tool-task/core/utils/TaskRegistry/TaskRegistry';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'runAll',

  task: async ({ name, options = {} }) => {
    const taskRegistry = Container.get(TaskRegistry);
    const { isParallel, patterns } = options;
    const taskRegistryF = reduce(
      taskRegistry.registry,
      (result, v, k) =>
        k !== name &&
        patterns?.some((pattern) => (isString(pattern) ? pattern === k : pattern.test(k)))
          ? { ...result, [k]: v }
          : result,
      {} as Record<string, CallablePromiseModel<TaskResultModel>>,
    );
    if (taskRegistryF) {
      const { tasks } = await prompt([
        {
          defaultValue: Object.keys(taskRegistryF),
          key: 'tasks',
          options: Object.keys(taskRegistryF),
          type: PROMPT_TYPE.CHECKBOX,
        },
      ]);
      const tasksF = tasks.map((task) => taskRegistryF[task]);
      await (isParallel ? Promise.all(tasksF) : sequence(tasksF));
    }

    return { status: TASK_STATUS.SUCCESS };
  },
};
