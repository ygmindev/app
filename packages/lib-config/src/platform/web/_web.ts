import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import type { _WebConfigModel, WebConfigModel } from '@lib/config/platform/web/web.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { WatchOptions } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

export const _web = ({ bundleConfig, isSsr, publicDir }: WebConfigModel): _WebConfigModel =>
  merge(
    [
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
    MERGE_STRATEGY.DEEP_APPEND,
  );
