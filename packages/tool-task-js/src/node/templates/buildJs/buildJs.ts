import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';
import { build } from 'esbuild';

const buildJs: TaskParamsModel<BuildJsParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'build-js',

  task: [
    async ({ options }) => {
      if (options?.entryFiles) {
        const { esbuildConfig } = bundleConfig.config({
          entryFiles: options.entryFiles,
          isTranspileProject: true,
          outputPathname: options.outputPathname,
          transpilePatterns: options.transpilePatterns,
        });
        esbuildConfig && (await build(esbuildConfig));
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};

export default buildJs;
