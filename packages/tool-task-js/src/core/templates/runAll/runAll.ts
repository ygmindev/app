import { Container } from '@lib/shared/core/utils/Container/Container';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import isString from 'lodash/isString';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'run-all',

  options: async ({ name, overrides }) => {
    const { registry } = Container.get(TaskRunner);
    const options = Object.keys(registry).filter(
      (k) =>
        k !== name &&
        overrides?.patterns?.some((pattern) =>
          isString(pattern) ? pattern === k : pattern.test(k),
        ),
    );
    return {
      tasks: {
        defaultValue: options,
        type: PROMPT_TYPE.MULTIPLE,
      },
    };
  },

  task: [
    async ({ options }) => {
      const { registry } = Container.get(TaskRunner);
      const tasksF = options?.tasks?.map((task) => registry[task]);
      tasksF && (await (options?.isParallel ? Promise.all(tasksF) : mapSequence(tasksF)));
    },
  ],
};
