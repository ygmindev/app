import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildJs from '@tool/task/node/templates/buildJs/buildJs';
import { type BuildSsrParamsModel } from '@tool/task/web/templates/buildSsr/buildSsr.models';

const buildSsr: TaskParamsModel<BuildSsrParamsModel> = {
  ...buildJs,

  name: 'build-ssr',

  overrides: () => ({
    entryFiles: { worker: fromWorking('src/worker.ts') },
    outputPathname: fromWorking(BUILD_DIR),
  }),
};

export default buildSsr;
