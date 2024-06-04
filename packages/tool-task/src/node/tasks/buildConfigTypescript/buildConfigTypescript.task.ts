import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DIST_DIR } from '@lib/config/file/file.constants';
import typescriptConfig from '@lib/config/node/typescript/typescript';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildJson from '@tool/task/core/templates/buildJson/buildJson';
import { type BuildJsonParamsModel } from '@tool/task/core/templates/buildJson/buildJson.models';

const buildConfigTypescript: TaskParamsModel<BuildJsonParamsModel> = {
  ...buildJson,

  name: 'build-json-typescript',

  overrides: () => ({
    path: fromWorking(DIST_DIR, typescriptConfig.params().configFilename),
    value: typescriptConfig.config(),
  }),
};

export default buildConfigTypescript;
