import vike from 'vike/plugin';
import { type WatchOptions } from 'vite';

import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { toRelative } from '#lib-backend/file/utils/toRelative/toRelative';
import { type _WebConfigModel, type WebConfigModel } from '#lib-config/platform/web/web.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '#lib-shared/core/utils/merge/merge.constants';

export const _web = ({ bundleConfig, isSsr, publicPath }: WebConfigModel): _WebConfigModel => {
  const bundleConfigF = bundleConfig();
  return merge(
    [
      {
        plugins: filterNil([
          isSsr && vike({ includeAssetsImportedByServer: true, prerender: { partial: true } }),
        ]),

        publicDir: toRelative({ from: fromWorking(), to: fromStatic(publicPath) }),

        server: {
          watch: (bundleConfigF.build?.watch as WatchOptions) ?? undefined,
        },
      },

      bundleConfigF,
    ],
    MERGE_STRATEGY.DEEP_APPEND,
  );
};
