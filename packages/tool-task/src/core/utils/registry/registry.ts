import type { TaskStatusModel } from '@tool/task/core/core.models';
import { _registry } from '@tool/task/core/utils/registry/_registry';
import reduce from 'lodash/reduce';

export const registry = (): Record<string, () => Promise<TaskStatusModel>> =>
  reduce(_registry(), (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }), {});
