import { children } from '@lib/backend/file/utils/children/children';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type RenameParamsModel } from '@tool/task/core/tasks/rename/rename.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { rename as renameBase } from '@tool/task/core/utils/rename/rename';

const rename: TaskParamsModel<RenameParamsModel> = {
  name: 're-name',

  options: () => [
    {
      key: 'packages',
      options: children(fromPackages(), { isDirectory: true }).map(({ name }) => name),
      type: PROMPT_TYPE.MULTIPLE,
    },
    { key: 'from' },
    { key: 'to' },
  ],

  task: [
    async ({ options }) => {
      for (const pkg of options?.packages || []) {
        if (options?.from && options?.to) {
          const matches = fromGlobs([joinPaths([pkg, `src/**/*${options.from}`])], {
            isAbsolute: true,
            root: fromPackages(),
          });
          for (const match of matches) {
            const paths = match.split('/');
            const filename = paths.pop();
            filename &&
              (await renameBase({
                from: filename,
                path: paths.join('/'),
                to: filename.replace(options.from, options.to),
              }));
          }
        }
      }
    },
  ],
};

export default rename;
