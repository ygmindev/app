import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import trim from 'lodash/trim';

const renameExtension: TaskParamsModel = {
  name: 'renameExtension',

  task: async ({ root }) => {
    const { from, to } = await prompt([{ key: 'from' }, { key: 'to' }]);
    const _from = `.${trim(from, '.')}`;
    const _to = `.${trim(to, '.')}`;
    await command({
      command: `find . -depth -name "*${_from}" -exec bash -c 'mv $0 "$\{0/${_from}/${_to}}"' {} \\;`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default renameExtension;
