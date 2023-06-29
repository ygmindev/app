import pick from 'lodash/pick';

import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '#lib-backend/file/utils/writeFile/writeFile';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { PACKAGE_EXTEND_KEYS } from '#tool-task/node/templates/packageExtend/packageExtend.constants';

export const packageExtend: TaskParamsModel = {
  name: 'packageExtend',

  task: async () => {
    const { default: _1, ...parentPackage } = await import(fromRoot('package.json'));
    const { default: _2, ...localPackage } = await import(fromWorking('package.json'));
    const finalPackage = merge([localPackage, pick(parentPackage, PACKAGE_EXTEND_KEYS)]);
    writeFile({
      filename: fromWorking('package.json'),
      value: JSON.stringify(finalPackage, null, 2),
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
