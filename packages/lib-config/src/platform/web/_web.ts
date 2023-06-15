import type { WatchOptions } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '#lib-backend/file/utils/toRelative/toRelative';
import type { _WebConfigModel, WebConfigModel } from '#lib-config/platform/web/web.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const _web = ({
  bundleConfig,
  isSsr,
  publicDir,
}: ReturnTypeModel<WebConfigModel>): ReturnTypeModel<_WebConfigModel> => {
  const bundleConfigF = bundleConfig();
  return merge(
    [
      {
        plugins: [isSsr && ssr({ prerender: { partial: true } })].filter(Boolean),

        publicDir: toRelative({ from: fromWorking(), to: fromStatic(publicDir) }),

        server: {
          watch: (bundleConfigF.build?.watch as WatchOptions) || undefined,
        },
      },

      bundleConfigF,
    ],
    MERGE_STRATEGY.DEEP_APPEND,
  );
};
