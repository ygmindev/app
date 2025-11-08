import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
import {
  type _BundleModel,
  type _BundleParamsModel,
} from '@tool/task/node/utils/bundle/_bundle.models';
import { build } from 'esbuild';

export const _bundle = async ({
  entryFiles,
  outDir,
  transpilePatterns,
}: _BundleParamsModel): Promise<_BundleModel> => {
  const { esbuildConfig } = bundleConfig.config({
    entryFiles,
    isTranspileProject: true,
    outDir,
    transpilePatterns,
  });
  esbuildConfig && (await build(esbuildConfig));
};
