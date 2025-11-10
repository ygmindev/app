import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { DIST_DIR } from '@lib/config/file/file.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildCliParamsModel } from '@tool/task/core/tasks/buildCli/buildCli.models';
import buildJs from '@tool/task/node/templates/buildJs/buildJs';

const buildCli: TaskParamsModel<BuildCliParamsModel> = {
  ...buildJs,

  name: 'build-cli',

  overrides: () => ({
    entryFiles: { cli: fromPackages('tool-task-js/src/cli.ts') },
    outDir: fromPackages('tool-task-js', DIST_DIR),
  }),
};

export default buildCli;
