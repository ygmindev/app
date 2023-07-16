import { registry, series, task as gulpTask } from 'gulp';
import reduce from 'lodash/reduce';

import { DuplicateError } from '#lib-shared/core/errors/DuplicateError/DuplicateError';
import { type TaskFunctionModel } from '#tool-task/core/core.models';
import { type _TaskRunnerModel } from '#tool-task/core/utils/TaskRunner/_TaskRunner.models';

export class _TaskRunner implements _TaskRunnerModel {
  registerTask = (name: string, task: () => Promise<void>): void => {
    if (registry().tasks()[name]) {
      throw new DuplicateError(`task ${name} exists`);
    }
    gulpTask(name, async () => task());
  };

  getTask = (name: string): TaskFunctionModel | null => this.registry[name] ?? null;

  get registry(): Record<string, TaskFunctionModel> {
    return reduce(
      registry().tasks(),
      (result, v, k) => ({
        ...result,
        [k]: async () =>
          new Promise((resolve) => {
            void series(v)(resolve);
          }),
      }),
      {},
    );
  }
}
