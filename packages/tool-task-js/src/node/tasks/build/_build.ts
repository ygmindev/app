import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import {
  type _BuildModel,
  type _BuildParamsModel,
} from '@tool/task/node/tasks/build/_build.models';
import { build } from 'esbuild';

export const _build = async ({
  entryFiles,
  outputDir,
}: _BuildParamsModel): Promise<_BuildModel> => {
  const { esbuildConfig } = bundleConfig.config({
    entryFiles,
    isTranspileProject: true,
    outputDir,
  });
  esbuildConfig && (await build(esbuildConfig));
};
