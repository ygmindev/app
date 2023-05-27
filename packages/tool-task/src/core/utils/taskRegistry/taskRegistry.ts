import { _taskRegistry } from '@tool/task/core/utils/taskRegistry/_taskRegistry';
import { TaskRegistryModel } from '@tool/task/core/utils/taskRegistry/taskRegistry.models';
import reduce from 'lodash/reduce';

export const taskRegistry = (): TaskRegistryModel =>
  reduce(_taskRegistry(), (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }), {});
