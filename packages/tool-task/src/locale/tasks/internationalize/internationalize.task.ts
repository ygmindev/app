import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import _parserConfig from '@lib/config/locale/parser/_parser';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { dest, src } from 'gulp';

const internationalize: TaskParamsModel = {
  name: 'internationalize',

  task: async () => {
    const { gulp: Parser } = await import('i18next-parser');
    await new Promise((resolve, reject) =>
      src(fromPackages('*/src/**/*'))
        .pipe(new Parser(_parserConfig).on('error', reject).on('finish', resolve))
        .pipe(dest('.')),
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default internationalize;
