import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { _bundle as _bundleConfig } from '@lib/config/node/bundle/_bundle';
import { type _WebConfigModel, type WebConfigModel } from '@lib/config/platform/web/web.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { readFileSync } from 'fs';
import vike from 'vike/plugin';
import { type WatchOptions } from 'vite';

export const _web = ({
  bundleConfig,
  httpConfig,
  isSsr,
  publicPath,
}: WebConfigModel): _WebConfigModel => {
  const bundleConfigF = _bundleConfig(bundleConfig());
  const httpConfigF = httpConfig();
  const { certificateDir, privateKeyFile, publicKeyFile } = httpConfigF.certificate;
  return merge(
    [
      {
        plugins: filterNil([
          isSsr && vike({ includeAssetsImportedByServer: true, prerender: { partial: true } }),
        ]),

        publicDir: toRelative({ from: fromWorking(), to: fromStatic(publicPath) }),

        server: {
          host: true,

          https: {
            cert: readFileSync(joinPaths([certificateDir, publicKeyFile])),
            key: readFileSync(joinPaths([certificateDir, privateKeyFile])),
          },

          middlewareMode: true,

          watch: (bundleConfigF.build?.watch as WatchOptions) ?? undefined,
        },
      },

      bundleConfigF,
    ],
    MERGE_STRATEGY.DEEP_APPEND,
  );
};
