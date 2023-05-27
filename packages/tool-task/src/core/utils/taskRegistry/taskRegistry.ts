import { withContainer } from '@lib/backend/core/decorators/withContainer/withContainer';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { TaskResultModel } from '@tool/task/core/core.models';
import { _TaskRegistry } from '@tool/task/core/utils/TaskRegistry/_TaskRegistry';
import type { TaskRegistryModel } from '@tool/task/core/utils/TaskRegistry/TaskRegistry.models';
import reduce from 'lodash/reduce';

@withContainer()
export class TaskRegistry extends _TaskRegistry implements TaskRegistryModel {
  register = (name: string, task: CallablePromiseModel<TaskResultModel>): void => {
    return this.register(name, task);
  };

  get registry(): Record<string, CallablePromiseModel<TaskResultModel>> {
    return reduce(
      this.registry,
      (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }),
      {},
    );
  }
}
