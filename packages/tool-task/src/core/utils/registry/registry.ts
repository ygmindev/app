import type { TaskResultsModel } from '@tool/task/core/utils/register/register.models';
import { _registry } from '@tool/task/core/utils/registry/_registry';
import { reduce } from 'lodash';

export const registry = (): Record<string, () => Promise<TaskResultsModel>> =>
  reduce(_registry(), (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }), {});
