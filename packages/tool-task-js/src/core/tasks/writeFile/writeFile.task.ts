import { writeFile as writeFileBase } from '@lib/backend/file/utils/writeFile/writeFile';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  type WriteFileModel,
  type WriteFileParamsModel,
} from '@tool/task/core/tasks/writeFile/writeFile.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const writeFile = buildTask<WriteFileParamsModel, WriteFileModel>({
  task: async ({ pathname, value }) => {
    writeFileBase({ pathname: pathname, value: stringify(value) });
  },
});
