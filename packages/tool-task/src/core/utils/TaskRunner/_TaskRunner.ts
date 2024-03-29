import { registry, series, task as gulpTask } from 'gulp';
import reduce from 'lodash/reduce';

import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { type _TaskRunnerModel } from '@tool/task/core/utils/TaskRunner/_TaskRunner.models';

export class _TaskRunner implements _TaskRunnerModel {
  registerTask = (name: string, task: () => Promise<void>): void => {
    if (registry().tasks()[name]) {
      throw new DuplicateError(`task ${name} exists`);
    }
    gulpTask(name, async () => task());
  };

  getTask = (name: string): (() => Promise<void>) => this.registry[name];

  get registry(): Record<string, () => Promise<void>> {
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
