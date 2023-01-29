import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { PACKAGE_EXTEND_KEYS } from '@tool/task/node/templates/packageExtend/packageExtend.constants';
import { writeFileSync } from 'fs';
import pick from 'lodash/pick';

export const packageExtend: TaskParamsModel = {
  name: 'packageExtend',

  task: async () => {
    const { default: _1, ...parentPackage } = await import(fromRoot('package.json'));
    const { default: _2, ...localPackage } = await import(fromWorking('package.json'));
    const finalPackage = merge({
      values: [localPackage, pick(parentPackage, PACKAGE_EXTEND_KEYS)],
    });
    writeFileSync(fromWorking('package.json'), JSON.stringify(finalPackage, null, 2));
    return { status: TASK_STATUS.SUCCESS };
  },
};
