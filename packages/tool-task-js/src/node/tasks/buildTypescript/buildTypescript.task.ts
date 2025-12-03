import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { typescriptConfig } from '@lib/config/node/typescript/typescript';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { writeFile } from '@tool/task/core/tasks/writeFile/writeFile.task';
import { task } from '@tool/task/core/utils/task/task';
import {
  type BuildTypescriptModel,
  type BuildTypescriptParamsModel,
} from '@tool/task/node/tasks/buildTypescript/buildTypescript.models';

export const buildTypescript = task<BuildTypescriptParamsModel, BuildTypescriptModel>({
  task: async () => {
    await writeFile({
      pathname: fromRoot(),
      value: stringify(typescriptConfig.config()),
    });
  },
});
