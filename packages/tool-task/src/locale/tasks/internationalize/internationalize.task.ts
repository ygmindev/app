import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { i18nParserConfig } from '@lib/config/i18n/i18n-parser.config';
import { importDynamic } from '@lib/shared/core/utils/importDynamic/importDynamic';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { dest, src } from 'gulp';

const internationalize: RegisterParamsModel = {
  name: 'internationalize',

  task: async () => {
    const { gulp: Parser } = await importDynamic('i18next-parser');
    await new Promise((resolve, reject) =>
      src(fromPackages('*/src/**/*'))
        .pipe(new Parser(i18nParserConfig).on('error', reject).on('finish', resolve))
        .pipe(dest('.')),
    );
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default internationalize;
