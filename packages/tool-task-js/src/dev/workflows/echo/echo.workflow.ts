import { workflow } from '@tool/task/core/utils/workflow/workflow';

export const echo = workflow({
  steps: [
    ['execute', 'echo hello 1'],
    ['execute', 'echo hello 2'],
  ],
});
