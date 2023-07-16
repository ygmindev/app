import isString from 'lodash/isString';
import reduce from 'lodash/reduce';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskFunctionModel, type TaskParamsModel } from '#tool-task/core/core.models';
import { type RunAllParamsModel } from '#tool-task/core/templates/runAll/runAll.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '#tool-task/core/utils/TaskRunner/TaskRunner';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'runAll',

  task: async ({ name, options = {} }) => {
    const taskRunner = Container.get(TaskRunner);
    const { isParallel, patterns } = options;
    const taskRunnerF = reduce(
      taskRunner.registry,
      (result, v, k) =>
        k !== name &&
        patterns?.some((pattern) => (isString(pattern) ? pattern === k : pattern.test(k)))
          ? { ...result, [k]: v }
          : result,
      {} as Record<string, TaskFunctionModel>,
    );
    if (taskRunnerF) {
      const { tasks } = await prompt([
        {
          defaultValue: Object.keys(taskRunnerF),
          key: 'tasks',
          options: Object.keys(taskRunnerF),
          type: PROMPT_TYPE.CHECKBOX,
        },
      ]);
      const tasksF = tasks.map((task) => taskRunnerF[task]);
      await (isParallel ? Promise.all(tasksF) : sequence(tasksF));
    }

    return { status: TASK_STATUS.SUCCESS };
  },
};
