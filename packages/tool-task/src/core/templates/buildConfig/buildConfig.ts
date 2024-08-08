import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildConfigParamsModel } from '@tool/task/core/templates/buildConfig/buildConfig.models';

const buildConfig: TaskParamsModel<BuildConfigParamsModel> = {
  name: 'build-config',

  task: [
    async ({ options }) => {
      if (options?.path && options?.value) {
        const { path, value } = options;
        // TODO: as util instead of task?
        writeFile({ filename: path, value: JSON.stringify(value, null, '  ') });
      }
    },
  ],
};

export default buildConfig;
