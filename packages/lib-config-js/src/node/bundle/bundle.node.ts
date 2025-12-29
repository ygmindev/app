import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';
import { taskConfig } from '@lib/config/task/task';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig = configBase.extend(() => {
  const { taskExtension, tasksPathname, workflowExtension, workflowsPathname } =
    taskConfig.params();
  return {
    barrelFiles: [
      [
        fromGlobs([fromPackages(`*/src/**/*/*${taskExtension}`)], { isAbsolute: true }),
        { outPathname: tasksPathname },
      ],

      [
        fromGlobs([fromPackages(`*/src/**/*/*${workflowExtension}`)], { isAbsolute: true }),
        { outPathname: workflowsPathname },
      ],
    ],

    envPrefix: ['SERVER_'],

    externals: [/node_modules/, '@eslint/js', 'globals', 'canvas'],

    platform: PLATFORM.NODE,

    preBundle: [
      ...fromGlobs([fromPackages('*/src/**/*.transport.ts')], { isAbsolute: true }).map((v) => ({
        entryFiles: v,
      })),
    ],

    transpilePatterns: [/graphql/],
  };
});
