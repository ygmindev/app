import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { MakeJsonParamsModel } from '@tool/task/core/templates/makeJson/makeJson.models';

const makeJson: TaskParamsModel<MakeJsonParamsModel> = {
  name: 'makeJson',

  task: async ({ options }) => {
    const value = options?.value && (await options?.value());
    if (value) {
      writeFile({ filename: options.filename, value: JSON.stringify(value, null, '  ') });
      return { status: TASK_STATUS.SUCCESS };
    } else {
      return { status: TASK_STATUS.ERROR };
    }
  },
};

export default makeJson;
