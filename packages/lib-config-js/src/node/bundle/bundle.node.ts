import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';
import { taskConfig } from '@lib/config/task/task';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => {
  const { taskExtension, tasksPathname, workflowExtension, workflowsPathname } =
    taskConfig.params();

  return {
    barrelFiles: [
      [
        fromGlobs([fromPackages(`*/src/**/*${workflowExtension}`)], { isAbsolute: true }),
        { outPathname: workflowsPathname },
      ],

      [
        fromGlobs([fromPackages(`*/src/**/*${taskExtension}`)], { isAbsolute: true }),
        { outPathname: tasksPathname },
      ],
    ],

    envPrefix: ['SERVER_'],

    externals: [/node_modules/, '@eslint/js', 'globals', 'canvas'],

    platform: PLATFORM.NODE,

    preBundle: fromGlobs([fromPackages('*/src/**/*.transport.ts')]).map((v) => ({ entryFiles: v })),

    transpilePatterns: [/graphql/],
  };
});

export { bundleConfig };
