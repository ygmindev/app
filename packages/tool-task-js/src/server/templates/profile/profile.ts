import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

export const profile: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'profile',

  task: [fromExecutable(`0x ${joinPaths([BUILD_DIR, 'index.js'])}`)],
};
