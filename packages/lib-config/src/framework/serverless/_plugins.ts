import type { _BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import type { Plugin } from 'esbuild';

export const plugins = async (): Promise<Array<Plugin>> => {
  const { bundleConfig } = await importFromEnv<_BundleConfigModel, 'bundleConfig'>(
    '@lib/config/node/bundle/configs/bundle.config',
  );
  const _bundleConfig = await bundleConfig();
  return _bundleConfig.optimizeDeps?.esbuildOptions?.plugins || [];
};
