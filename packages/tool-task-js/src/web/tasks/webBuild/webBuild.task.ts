import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { _webBuild } from '@tool/task/web/tasks/webBuild/_webBuild';
import { WEB_BUILD } from '@tool/task/web/tasks/webBuild/webBuild.constants';
import {
  type WebBuildModel,
  type WebBuildParamsModel,
} from '@tool/task/web/tasks/webBuild/webBuild.models';

export const webBuild = buildTask<WebBuildParamsModel, WebBuildModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
    overrrides: {
      ENV_PLATFORM: PLATFORM.WEB,
    },
  },

  name: WEB_BUILD,

  task: async (params, context) => {
    const environment = Container.get(Environment);
    const { bundleConfig } = await import(
      `@lib/config/node/bundle/bundle.${environment.variables.ENV_PLATFORM}`
    );
    await _webBuild({
      bundle: bundleConfig.config({ outDirname: fromDist() }),
    });
    return {};
  },
});
