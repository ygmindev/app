import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DIST_DIR } from '@lib/config/file/file.constants';
import typescriptConfig from '@lib/config/node/typescript/typescript';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import buildText from '@tool/task/core/templates/buildText/buildText';
import { type BuildTextParamsModel } from '@tool/task/core/templates/buildText/buildText.models';

const buildConfigTypescript: TaskParamsModel<BuildTextParamsModel> = {
  ...buildText,

  name: 'build-config-typescript',

  overrides: () => ({
    path: fromWorking(DIST_DIR, typescriptConfig.params().configFilename),
    value: typescriptConfig.config(),
  }),
};

export default buildConfigTypescript;
