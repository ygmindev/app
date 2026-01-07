import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
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
  outDir,
  watch,
}: _NodeBuildParamsModel): Promise<_NodeBuildModel> => {
  let config: _BundleConfigModel | undefined = configRaw ?? {};
  const environment = Container.get(Environment);
  const { bundleConfig } = await import(
    `@lib/config/node/bundle/bundle.${environment.variables.ENV_PLATFORM}`
  );
  config = merge(
    [
      bundleConfig.config({ entryFiles, format, outDir, watch }, MERGE_STRATEGY.DEEP_PREPEND),
      config,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
  await build({ ...config, configFile: false });
};
