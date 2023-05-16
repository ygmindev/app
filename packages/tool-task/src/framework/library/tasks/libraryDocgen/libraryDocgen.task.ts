import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import libraryConfig from '@lib/config/framework/library/configs/library.config';
import { docgen } from '@lib/library/docgen/utils/docgen/docgen';
import type { DocgenMetaDataModel } from '@lib/library/docgen/utils/docgen/docgen.models';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { progress } from '@tool/task/core/utils/progress/progress';
import { existsSync, writeFileSync } from 'fs';

const libraryDocgen: TaskParamsModel = {
  name: 'libraryDocgen',

  task: async () => {
    const _progress = progress({ name: 'Library Docgen' });
    const files = fromGlobs({ globs: libraryConfig.patterns, isAbsolute: true }).filter((file) =>
      existsSync(file.replace('.tsx', '.library.tsx')),
    );
    _progress.start(files.length);
    const metada = files.reduce((result, file) => {
      _progress.increment(1);
      const parsed = docgen(file);
      if (parsed) {
        const { name, ..._parsed } = parsed;
        return { ...result, [name]: _parsed };
      }
      return result;
    }, {} as Record<string, DocgenMetaDataModel>);
    _progress.stop();
    writeFileSync(fromStatic(libraryConfig.path), JSON.stringify(metada, null, 2));
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default libraryDocgen;
