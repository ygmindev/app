import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';
import { registry } from '@tool/task/core/utils/registry/registry';
import { filter, isString } from 'lodash';

export const runAll: TaskParamsModel<RunAllParamsModel> = {
  name: 'runAll',

  task: async ({ name, options }) => {
    const _registry = registry();
    const { isParallel, patterns } = options;
    const tasks = filter(
      _registry,
      (_v, k) =>
        k !== name &&
        patterns.some((pattern) =>
          isString(pattern) ? pattern === k : (pattern as RegExp).test(k),
        ),
    );
    if (tasks) {
      await (isParallel ? Promise.all(tasks) : sequence(tasks));
    }

    return { status: TASK_STATUS.SUCCESS };
  },
};
