import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { staticServer } from '@tool/task/server/utils/staticServer/staticServer';
import { type ServeParamsModel } from '@tool/task/web/templates/serve/serve.models';

export const serve: TaskParamsModel<ServeParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'serve',

  onBefore: [({ options, target }) => !options?.skipBuild && `${target}-build`],

  task: [({ root }) => staticServer({ pathname: joinPaths([root, BUILD_DIR, 'client']) })],
};
