import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildJsonParamsModel } from '@tool/task/core/templates/buildJson/buildJson.models';

const buildJson: TaskParamsModel<BuildJsonParamsModel> = {
  name: 'build-json',

  task: [
    async ({ options }) => {
      if (options?.filename && options?.value) {
        const { filename, value } = options;
        // TODO: as util instead of task?
        writeFile({ filename, value: JSON.stringify(value, null, '  ') });
      }
    },
  ],
};

export default buildJson;
