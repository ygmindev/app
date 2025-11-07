import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { handleCleanup } from '@lib/shared/core/utils/handleCleanup/handleCleanup';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type _BuildModel,
  type _BuildParamsModel,
} from '@tool/task/node/tasks/build/_build.models';
import { build, context } from 'esbuild';

export const _build = async ({
  entryFiles,
  outputDir,
}: _BuildParamsModel): Promise<_BuildModel> => {
  const { esbuildConfig } = bundleConfig.config({
    entryFiles,
    isTranspileProject: true,
    outputDir,
  });
  if (esbuildConfig) {
    if (process.env.NODE_ENV === 'development') {
      logger.progress('build watching');
      const ctx = await context(esbuildConfig);
      await handleCleanup({ onCleanUp: ctx.dispose });
      await ctx.watch();
      await new Promise(() => {});
    } else {
      await build(esbuildConfig);
    }
  }
};

// NODE_ENV=development run build --entryFiles=/Users/yoongeemin/Developer/Projects/app/packages/tool-task-js/src/dev/workflows/echo/echo.workflow.ts
