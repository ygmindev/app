import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
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
      await (await context(esbuildConfig)).watch();
      await new Promise(() => {});
    } else {
      await build(esbuildConfig);
    }
  }
};
