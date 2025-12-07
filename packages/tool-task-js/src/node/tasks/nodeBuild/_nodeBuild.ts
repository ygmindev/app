import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import {
  type _NodeBuildModel,
  type _NodeBuildParamsModel,
} from '@tool/task/node/tasks/nodeBuild/_nodeBuild.models';
import { build } from 'vite';

export const _nodeBuild = async ({
  entryFiles,
  format,
  outDir,
}: _NodeBuildParamsModel): Promise<_NodeBuildModel> => {
  const config = bundleConfig.config({
    entryFiles,
    format,
    // isTranspileProject: true,
    outDir,
  });
  await build({ ...config, configFile: false });
};
