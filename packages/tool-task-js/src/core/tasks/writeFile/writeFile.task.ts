import { writeFile as writeFileBase } from '@lib/backend/file/utils/writeFile/writeFile';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import {
  type WriteFileModel,
  type WriteFileParamsModel,
} from '@tool/task/core/tasks/writeFile/writeFile.models';
import { task } from '@tool/task/core/utils/task/task';

export const writeFile = task<WriteFileParamsModel, WriteFileModel>({
  task: async ({ pathname, value }) => {
    writeFileBase({ filename: pathname, value: stringify(value) });
  },
});
