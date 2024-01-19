import { stringify } from 'yaml';

import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildYamlParamsModel } from '@tool/task/core/templates/buildYaml/buildYaml.models';

const buildYaml: TaskParamsModel<BuildYamlParamsModel> = {
  name: 'build-json',

  task: [
    async ({ options }) => {
      if (options?.filename && options?.value) {
        const { filename, value } = options;
        // TODO: as util instead of task?
        writeFile({ filename, value: stringify(value) });
      }
    },
  ],
};

export default buildYaml;
