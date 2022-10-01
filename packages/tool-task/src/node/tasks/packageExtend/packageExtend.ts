import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { PACKAGE_EXTEND_KEYS } from '@tool/task/node/tasks/packageExtend/packageExtend.constants';
import { writeFileSync } from 'fs';
import { pick } from 'lodash';

export const packageExtend: RegisterParamsModel = {
  name: 'packageExtend',

  task: async () => {
    const { default: _1, ...parentPackage } = await import(fromRoot('package.json'));
    const { default: _2, ...localPackage } = await import(fromWorking('package.json'));
    const finalPackage = merge({
      values: [localPackage, pick(parentPackage, PACKAGE_EXTEND_KEYS)],
    });
    writeFileSync(fromWorking('package.json'), JSON.stringify(finalPackage, null, 2));
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
