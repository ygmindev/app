import reduce from 'lodash/reduce';

const workflows = import.meta.glob('/packages/tool-task-js/**/*.workflow.ts', { eager: true });

export default reduce(
  Object.values(workflows) as Array<Record<string, unknown>>,
  (result, value) => ({ ...result, ...value }),
  {} as Record<string, unknown>,
);
