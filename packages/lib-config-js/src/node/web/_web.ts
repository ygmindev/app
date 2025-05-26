import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { type _WebConfigModel, type WebConfigModel } from '@lib/config/node/web/web.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { readFileSync } from 'fs';
import vike from 'vike/plugin';
import { type WatchOptions } from 'vite';

export const _web = ({ bundle, isSsr, server }: WebConfigModel): _WebConfigModel => {
  const bundleConfigF = _bundle(bundle);
  const { certificateDir, privateKeyFilename, publicKeyFilename } = server.certificate;

  let https;
  try {
    https = {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
    };
  } catch (_) {}

  return merge(
    [
      {
        plugins: filterNil([isSsr && vike()]),

        server:
          process.env.NODE_ENV === 'development'
            ? {
                host: true,

                https,

                middlewareMode: true,

                watch: (bundleConfigF.build?.watch as WatchOptions) ?? undefined,
              }
            : undefined,
      },

      bundleConfigF,
    ],

    MERGE_STRATEGY.DEEP_APPEND,
  );
};
