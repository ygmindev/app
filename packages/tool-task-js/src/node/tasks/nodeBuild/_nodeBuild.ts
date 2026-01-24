import { type _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import {
  type _NodeBuildModel,
  type _NodeBuildParamsModel,
} from '@tool/task/node/tasks/nodeBuild/_nodeBuild.models';
import { build } from 'vite';

export const _nodeBuild = async ({
  configRaw,
  entryFiles,
  format,
  outDirname,
  watch,
}: _NodeBuildParamsModel): Promise<_NodeBuildModel> => {
  let config: _BundleConfigModel | undefined = configRaw ?? {};
  config = merge(
    [
      bundleConfig.config({ entryFiles, format, outDirname, watch }, MERGE_STRATEGY.DEEP_PREPEND),
      config,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
  await build({ ...config, configFile: false });
};
