import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';
import { taskRegistry } from '@tool/task/core/utils/taskRegistry/taskRegistry';
import filter from 'lodash/filter';
import isString from 'lodash/isString';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'runAll',

  task: async ({ name, options = {} }) => {
    const _registry = taskRegistry();
    const { isParallel, patterns } = options;
    const tasks = filter(
      _registry,
      (_v, k) =>
        k !== name &&
        patterns?.some((pattern) =>
          isString(pattern) ? pattern === k : (pattern as RegExp).test(k),
        ),
    );
    if (tasks) {
      await (isParallel ? Promise.all(tasks) : sequence(tasks));
    }

    return { status: TASK_STATUS.SUCCESS };
  },
};
