import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { typescriptConfig } from '@lib/config/node/typescript/typescript';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { writeFile } from '@tool/task/core/tasks/writeFile/writeFile.task';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { BUILD_TYPESCRIPT } from '@tool/task/node/tasks/buildTypescript/buildTypescript.constants';
import {
  type BuildTypescriptModel,
  type BuildTypescriptParamsModel,
} from '@tool/task/node/tasks/buildTypescript/buildTypescript.models';

export const buildTypescript = buildTask<BuildTypescriptParamsModel, BuildTypescriptModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: BUILD_TYPESCRIPT,

  task: async () => {
    const { configFilename } = typescriptConfig.params();
    return writeFile({
      pathname: fromDist(configFilename),
      value: stringify(typescriptConfig.config()),
    });
  },
});
