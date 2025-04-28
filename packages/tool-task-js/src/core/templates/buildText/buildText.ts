import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildTextParamsModel } from '@tool/task/core/templates/buildText/buildText.models';

const buildText: TaskParamsModel<BuildTextParamsModel> = {
  name: 'build-text',

  task: [
    async ({ options }) => {
      if (options?.path && options?.value) {
        const { path, value } = options;
        // TODO: as util instead of task?
        writeFile({ filename: path, value: stringify(value) });
      }
    },
  ],
};

export default buildText;
