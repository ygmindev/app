import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import reduce from 'lodash/reduce';

const tasks = import.meta.glob('/packages/tool-task-js/**/*.task.ts', { eager: true });

export default reduce(
  Object.values(tasks) as Array<AsyncCallableModel>,
  (result, value) => ({ ...result, ...value }),
  {} as Record<string, AsyncCallableModel>,
);
