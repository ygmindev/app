import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { EXTENSIONS_BASE } from '@lib/config/file/file.constants';
import parserConfig from '@lib/config/locale/parser/parser';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { dest, src } from 'gulp';

const internationalize: TaskParamsModel<unknown> = {
  name: 'internationalize',

  task: [
    async () => {
      const { gulp: Parser } = (await import('i18next-parser')) as unknown as {
        gulp: ClassModel<NodeJS.ReadWriteStream>;
      };
      await new Promise((resolve, reject) =>
        src(fromGlobs([fromPackages(`*-js/src/**/*{${EXTENSIONS_BASE.join(',')}}`)]))
          .pipe(new Parser(parserConfig.config()).on('error', reject).on('finish', resolve))
          .pipe(dest('.')),
      );
    },
  ],
};

export default internationalize;
