import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import type { TaskResultModel } from '@tool/task/core/core.models';
import type { _TaskRegistryModel } from '@tool/task/core/utils/TaskRegistry/_TaskRegistry.models';
import { registry, series, task as gulpTask } from 'gulp';
import reduce from 'lodash/reduce';

export class _TaskRegistry implements _TaskRegistryModel {
  _register = (name: string, task: CallablePromiseModel): void => {
    if (registry().tasks()[name]) {
      throw new DuplicateError(`task ${name} exists`);
    }
    gulpTask(name, async () => await task());
  };

  get registry(): Record<string, CallablePromiseModel<TaskResultModel>> {
    return reduce(
      registry().tasks(),
      (result, v, k) => ({
        ...result,
        [k]: async () => new Promise((resolve) => series(v)(resolve)),
      }),
      {},
    );
  }

  get = (name: string): CallablePromiseModel<TaskResultModel> => {
    const task = this.registry[name];
    if (task) {
      return task;
    }
    throw new NotFoundError(name);
  };
}
