import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';
import { rollup } from 'rollup';

const buildJs: TaskParamsModel<BuildJsParamsModel> = {
  name: 'build-js',

  task: [
    async ({ options }) => {
      if (options?.entryFiles) {
        const { rollupConfig } = bundleConfig.config({
          entryFiles: options.entryFiles,
          isTranspileProject: true,
          outputPathname: options.outputPathname,
          transpilePatterns: [/^((?!eslint).)*$/],
        });
        rollupConfig && (await rollup(rollupConfig));
      }
    },
  ],

  variables: () => ({
    ENV_PLATFORM: PLATFORM.NODE,
  }),
};

export default buildJs;

// import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
// import { PLATFORM } from '@lib/shared/platform/platform.constants';
// import { type TaskParamsModel } from '@tool/task/core/core.models';
// import { type BuildJsParamsModel } from '@tool/task/node/templates/buildJs/buildJs.models';
// import { build } from 'esbuild';

// const buildJs: TaskParamsModel<BuildJsParamsModel> = {
//   name: 'build-js',

//   task: [
//     async ({ options }) => {
//       if (options?.entryFiles) {
//         const { esbuildConfig } = bundleConfig.config({
//           entryFiles: options.entryFiles,
//           isTranspileProject: true,
//           outputPathname: options.outputPathname,
//           transpilePatterns: [/^((?!eslint).)*$/],
//         });
//         esbuildConfig && (await build(esbuildConfig));
//       }
//     },
//   ],

//   variables: () => ({
//     ENV_PLATFORM: PLATFORM.NODE,
//   }),
// };

// export default buildJs;
