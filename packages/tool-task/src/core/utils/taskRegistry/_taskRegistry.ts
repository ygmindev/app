import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import type { TaskResultModel } from '@tool/task/core/core.models';
import type { _TaskRegistryModel } from '@tool/task/core/utils/TaskRegistry/_TaskRegistry.models';
import { registry, series, task as register } from 'gulp';
import reduce from 'lodash/reduce';

export class _TaskRegistry implements _TaskRegistryModel {
  register = (name: string, task: CallablePromiseModel<TaskResultModel>): void => {
    if (registry().tasks()[name]) {
      throw new DuplicateError(`${name} exists`);
    }
    register(name, async () => await task());
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
}
