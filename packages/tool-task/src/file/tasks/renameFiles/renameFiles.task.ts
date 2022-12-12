import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';
import type { RenameFilesParamsModel } from '@tool/task/file/tasks/renameFiles/renameFiles.models';

const renameFiles: TaskParamsModel<RenameFilesParamsModel> = {
  name: 'renameFiles',

  task: async ({ options, root }) => {
    await command({
      command: `find ./ -depth -name "${options.from}" -exec sh -c 'mv "$1" "\${1%${options.from}}${options.to}"' _ {} ;`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default renameFiles;
