import trim from 'lodash/trim';

import type { TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';
import { prompt } from '#tool-task/core/utils/prompt/prompt';

const renameExtension: TaskParamsModel = {
  name: 'renameExtension',

  task: async ({ root }) => {
    const { from, to } = await prompt([{ key: 'from' }, { key: 'to' }]);
    const fromF = `.${trim(from, '.')}`;
    const toF = `.${trim(to, '.')}`;
    return command(
      `find . -depth -name "*${fromF}" -exec bash -c 'mv $0 "$\{0/${fromF}/${toF}}"' {} \\;`,
      { root },
    );
  },
};

export default renameExtension;
