import { dest, src } from 'gulp';

import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { _config } from '#lib-config/locale/parser/parser';
import type { ClassModel } from '#lib-shared/core/core.models';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';

const internationalize: TaskParamsModel = {
  name: 'internationalize',

  task: async () => {
    const { gulp: Parser } = (await import('i18next-parser')) as unknown as {
      gulp: ClassModel<NodeJS.ReadWriteStream>;
    };
    await new Promise((resolve, reject) =>
      src(fromPackages('*/src/**/*'))
        .pipe(new Parser(_config).on('error', reject).on('finish', resolve))
        .pipe(dest('.')),
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default internationalize;
