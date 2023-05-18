import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import type { _WebConfigModel, WebConfigModel } from '@lib/config/framework/web/_web.models';
import type { _BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { WatchOptions } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

const _webConfig: _WebConfigModel = async () => {
  const { isSsr, publicDir } = await importConfig<WebConfigModel>('framework/web/web');
  const _bundleConfig = await importConfig<_BundleConfigModel>('node/bundle/_bundle');
  return merge(
    [
      {
        plugins: [
          isSsr && ssr({ includeAssetsImportedByServer: true, prerender: { partial: true } }),
        ].filter(Boolean),

        publicDir: toRelative({ from: fromWorking(), to: fromStatic(publicDir) }),

        server: {
          watch: (_bundleConfig.build?.watch as WatchOptions) || undefined,
        },
      },

      _bundleConfig,
    ],
    MERGE_STRATEGY.DEEP_APPEND,
  );
};

export default _webConfig;
