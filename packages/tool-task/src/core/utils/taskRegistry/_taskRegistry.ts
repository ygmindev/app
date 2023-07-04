import { registry, series, task as gulpTask } from 'gulp';
import reduce from 'lodash/reduce';

import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';
import { DuplicateError } from '#lib-shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { type TaskResultModel } from '#tool-task/core/core.models';
import { type _TaskRegistryModel } from '#tool-task/core/utils/TaskRegistry/_TaskRegistry.models';

export class _TaskRegistry implements _TaskRegistryModel {
  _register = (name: string, task: OptionalCallablePromiseModel): void => {
    if (registry().tasks()[name]) {
      throw new DuplicateError(`task ${name} exists`);
    }
    gulpTask(name, async () => task());
  };

  get registry(): Record<string, OptionalCallablePromiseModel<TaskResultModel>> {
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

  get = (name: string): OptionalCallablePromiseModel<TaskResultModel> => {
    const task = this.registry[name];
    if (task) {
      return task;
    }
    throw new NotFoundError(name);
  };
}
