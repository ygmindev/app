import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

export const iosPod: TaskParamsModel<unknown> = {
  name: 'iosPod',

  // TODO: doesn't need to be async?
  root: fromWorking('ios'),

  task: [
    async () => runClean({ patterns: ['Pods'], root: fromWorking('ios') }),

    'pod install --repo-update',
  ],
};
