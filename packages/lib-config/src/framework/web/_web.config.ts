import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';
import { bundleConfig } from '@lib/config/javascript/bundle/bundle.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { UserConfig, WatchOptions } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

export const _webConfig = ({ isSsr, publicDir }: _WebConfigParamsModel): UserConfig =>
  merge({
    strategy: MERGE_STRATEGY.DEEP_APPEND,

    values: [
      {
        plugins: [
          isSsr && ssr({ includeAssetsImportedByServer: true, prerender: { partial: true } }),
        ].filter(Boolean),

        publicDir: toRelative({ from: fromWorking(), to: fromStatic(publicDir) }),

        server: {
          watch: (bundleConfig.build?.watch as WatchOptions) || undefined,
        },
      },

      bundleConfig,
    ],
  });
